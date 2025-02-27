

const router= require('express').Router();
const Investor= require('../models/investor.model');
const Startup= require('../models/startup.model');
const authMiddleware= require('../middleware/auth.middleware');

router.get('/all-startups',async(req,res)=>{
  try{
    const data= await Startup.find({})
    res.send(data)
  }catch(e){
    res.status(400).send({message:e.message})
  }
})

router.get("/all-investors", async (req, res) => {
  try {
    const data = await Investor.find({});
    res.send(data);
  } catch (e) {
    res.status(400).send({ message: e.message });
  }
});

router.get('/startup', authMiddleware, async(req, res) => {
    
  const data=await Startup.findById(req.user);
  console.log(data)
    res.status(200).json(data);
});

router.get('/investor', authMiddleware, async(req, res) => {
  const data=await Investor.findById(req.user);
    res.status(200).json(data);
});

module.exports=router;