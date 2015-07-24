var CommentBox = React.createClass({
  render: function() {
    return (
      // <div className="commentBox">
      //   I am a CommentBox.
      // </div>
      React.createElement(
        "div",
        { className: "commentBox" },
        "Hello I'm a CommentBox"
      )
    );
  }
});



React.render(
  <CommentBox />,
  document.getElementById("content")
);
