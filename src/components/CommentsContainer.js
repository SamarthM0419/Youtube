import React from "react";
import Comment from "./Comment";

const commentsData = [
  {
    name: "Samarth",
    text: "absa asda aDDSDA",
    replies: [{ name: "Samarth", text: "absa asda aDDSDA", replies: [] }],
  },
  {
    name: "Samarth",
    text: "absa asda aDDSDA",
    replies: [
      {
        name: "Samarth",
        text: "absa asda aDDSDA",
        replies: [
          {
            name: "Samarth",
            text: "absa asda aDDSDA",
            replies: [
              {
                name: "Samarth",
                text: "absa asda aDDSDA",
                replies: [
                  {
                    name: "Samarth",
                    text: "absa asda aDDSDA",
                    replies: [
                      {
                        name: "Samarth",
                        text: "absa asda aDDSDA",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  { name: "Samarth", text: "absa asda aDDSDA", replies: [] },
];

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => (
    <div>
      <Comment key={index} data={comment} />
      <div className="pl-5 ml-5 border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};

const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
      <h1 className="text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
