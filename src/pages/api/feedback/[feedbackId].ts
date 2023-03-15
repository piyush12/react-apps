import data from "@/feedbackData.json";
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { feedbackId } = req.query;

  if (req.method === "GET") {
    if (feedbackId && typeof feedbackId === "string") {
      const getFeedBack = data.productRequests.find(
        (item) => item.id === parseInt(feedbackId)
      );
      res.status(200).json(getFeedBack);
    }
  } else if (req.method === "POST") {
    const { content, commentId, postId, newPostComment } = req.body;

    let newComment = {
      id: 0,
      content: "",
      replyingTo: "",
      user: data.currentUser,
    };
    data.productRequests.forEach((product) => {
      if (
        typeof feedbackId === "string" &&
        feedbackId &&
        product.id === parseInt(feedbackId)
      ) {
        if (newPostComment) {
          newComment.id = Math.floor(Math.random() * 100);
          newComment.content = content;
          product.comments?.push(newComment);
        } else {
          product.comments?.forEach((comment) => {
            if (comment.id === commentId) {
              const isReplyingToReplies = postId.split("_");
              if (isReplyingToReplies[0] === "reply") {
                let getReply = comment.replies?.find(
                  (item) => item.id === parseInt(isReplyingToReplies[1])
                )?.user.username;
                newComment.replyingTo = getReply || "";
              } else {
                newComment.replyingTo = comment.user.username;
              }
              newComment.id = Math.floor(Math.random() * 100);
              newComment.content = content;
              if (comment.replies) {
                comment.replies.push(newComment);
              } else {
                comment.replies = [];
                comment.replies?.push(newComment);
              }

              // comment.replies?.push(newComment);
            }
          });
        }
      }
    });
    res.status(200).json(newComment);
  }

  //   console.log("feedbackid", feedbackId);
}
