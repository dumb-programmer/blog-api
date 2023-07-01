import Comment from "./Comment";

const Comments = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <div class="comment">
        {[
          {
            name: "Test",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis culpa alias ex corrupti corporis exercitationem, dolor nemo deleniti quibusdam laborum fugiat reiciendis laboriosam porro perferendis ullam eius cupiditate. Molestias, ratione delectus exercitationem quos animi suscipit dolorem esse minima officia? Doloribus suscipit reprehenderit quidem nihil optio beatae molestiae, aperiam voluptas.",
          },
          {
            name: "Test",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis culpa alias ex corrupti corporis exercitationem, dolor nemo deleniti quibusdam laborum fugiat reiciendis laboriosam porro perferendis ullam eius cupiditate. Molestias, ratione delectus exercitationem quos animi suscipit dolorem esse minima officia? Doloribus suscipit reprehenderit quidem nihil optio beatae molestiae, aperiam voluptas.",
          },
          {
            name: "Test",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis culpa alias ex corrupti corporis exercitationem, dolor nemo deleniti quibusdam laborum fugiat reiciendis laboriosam porro perferendis ullam eius cupiditate. Molestias, ratione delectus exercitationem quos animi suscipit dolorem esse minima officia? Doloribus suscipit reprehenderit quidem nihil optio beatae molestiae, aperiam voluptas.",
          },
          {
            name: "Test",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis culpa alias ex corrupti corporis exercitationem, dolor nemo deleniti quibusdam laborum fugiat reiciendis laboriosam porro perferendis ullam eius cupiditate. Molestias, ratione delectus exercitationem quos animi suscipit dolorem esse minima officia? Doloribus suscipit reprehenderit quidem nihil optio beatae molestiae, aperiam voluptas.",
          },
          {
            name: "Test",
            comment:
              "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nobis culpa alias ex corrupti corporis exercitationem, dolor nemo deleniti quibusdam laborum fugiat reiciendis laboriosam porro perferendis ullam eius cupiditate. Molestias, ratione delectus exercitationem quos animi suscipit dolorem esse minima officia? Doloribus suscipit reprehenderit quidem nihil optio beatae molestiae, aperiam voluptas.",
          },
        ].map((comment, idx) => (
          <Comment comment={comment} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
