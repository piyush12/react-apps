import data from "@/feedbackData.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { editFeedback } = req.query;
  const { ftitle, fcategory, fstatus, fdetail } = req.body;
  console.log("editFeedback", editFeedback);

  if (req.method === "GET") {
    if (editFeedback && typeof editFeedback === "string") {
      const getFeedBack = data.productRequests.find(
        (item) => item.id === parseInt(editFeedback)
      );
      res.status(200).json(getFeedBack);
    }
  } else if (req.method === "POST") {
    data.productRequests.forEach((element) => {
      if (element.id === parseInt(editFeedback)) {
        element.title = ftitle;
        element.category = fcategory;
        element.status = fstatus;
        element.description = fdetail;
      }
    });
    res.status(200).json({ ftitle, fcategory, fstatus, fdetail });
    // console.log("editFeedback>>>>>>>>>>>>>>>>>>>",ftitle,fcategory,fstatus,fdetail);
  }
}
