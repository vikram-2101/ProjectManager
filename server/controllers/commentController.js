const Comment = require('../models/Comment');

exports.addComment = async (req, res) => {
  try {
    const { taskId, content, parentId } = req.body;
    const comment = new Comment({
      taskId,
      authorId: req.user.userId,
      content,
      parentId: parentId || null,
    });
    await comment.save();
    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getCommentsByTask = async (req, res) => {
  try {
    const { taskId } = req.params;
    const comments = await Comment.find({ taskId }).populate('authorId', 'name email role').sort({ createdAt: 1 });
    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};