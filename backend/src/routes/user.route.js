

const router= require('express').Router();
const Investor= require('../models/investor.model');
const Startup= require('../models/startup.model');
const authMiddleware= require('../middleware/auth.middleware');
const { default: InvestorProfile } = require('../../../frontend/src/pages/InvestorProfile');

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

router.post('/startup', authMiddleware, async(req, res) => {
    try{
        
        const startup= await Startup.findByIdAndUpdate(req
            .user, req.body, {new:true});
            res.status(200).json(startup);
    }catch(error){
        console.error("Error updating startup:", error);
        res.status(500).json({message: "Server error", error: error.message});
    }
})
router.post('/investor', authMiddleware, async(req, res) => {
    try{
        
        const startup= await Investor.findByIdAndUpdate(req
            .user, req.body, {new:true});
            res.status(200).json(startup);
    }catch(error){
        console.error("Error updating startup:", error);
        res.status(500).json({message: "Server error", error: error.message});
    }
})

module.exports=router;