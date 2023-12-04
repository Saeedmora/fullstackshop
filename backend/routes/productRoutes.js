import epxress from "express";
const router = epxress.Router();
import products from '../data/products.js';
import e from "express";

router.get('/',(req,res)=>{
res.json(products);
});

router.get('/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});




export default router;