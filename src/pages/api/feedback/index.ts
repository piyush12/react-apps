// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import data from "@/feedbackData.json";
import type { NextApiRequest, NextApiResponse } from "next";

interface ISortBy {
  [key: string]: (a: any, b: any) => number;
}

const sortedBy: ISortBy = {
  mostVotes: (a, b) => b.upvotes - a.upvotes,
  leastVotes: (a, b) => a.upvotes - b.upvotes,
  mostComments: (a, b) => (b.comments?.length || 0) - (a.comments?.length || 0),
  leastComments: (a, b) =>
    (a.comments?.length || 0) - (b.comments?.length || 0),
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const { cat } = req.query;
    if (cat && cat !== "all") {
      const copyProduct = { ...data };
      const filteredData = copyProduct.productRequests.filter(
        (item) => item.category === cat
      );
      copyProduct.productRequests = filteredData;
      res.status(200).json(copyProduct);
    } else {
      res.status(200).json(data);
    }
  } else if (req.method === "POST") {
    const { sortBy } = req.body;
    if (sortBy) {
      data.productRequests.sort(sortedBy[sortBy]);
      res.status(200).json(data);
    } else {
      return res.status(400).json({ error: "Invalid sortBy field" });
    }
  }
}
