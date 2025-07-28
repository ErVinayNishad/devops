const  express=require('express');
const router=express.Router();
const {getTodo,createtodo,updateTodo,deleteTodo}=require("../controllers/todoController");
router.get('/',getTodo);
router.post('/',createtodo);
router.put('/:id', updateTodo); 
router.delete('/:id', deleteTodo);
module.exports=router;
