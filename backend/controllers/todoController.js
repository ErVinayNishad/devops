const Todo=require('../model/Todo')
exports.getTodo=async  (req,res)=>{
  const todos=await Todo.find();
  res.json(todos)
}
exports.createtodo=async (req, res) => {
  console.log("POST /api/todos hit"); // ✅ log
  console.log("Request body:", req.body); // ✅ log

  try {
    const todo = new Todo(req.body);
    const savedTodo = await todo.save();
    res.status(201).json(savedTodo);
  } catch (err) {
    console.error("Error in createTodo:", err); // ✅ error log
    res.status(500).json({ message: "Something went wrong" });
  }
};
exports.updateTodo = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;

  try {
    const updatedTodo = await Todo.findByIdAndUpdate(id, updatedData, { new: true });
    if (!updatedTodo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json(updatedTodo);
  } catch (err) {
    console.error("Error in updateTodo:", err);
    res.status(500).json({ message: "Something went wrong in update" });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found" });
    }
    res.status(200).json({ message: "Todo deleted" });
  } catch (err) {
    console.error("Error in deleteTodo:", err);
    res.status(500).json({ message: "Something went wrong" });
  }
};
