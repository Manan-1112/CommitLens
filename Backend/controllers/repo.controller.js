const axios=require('axios');
const githubService=require('../github-service');

async function getRepos(req,res){
    if(!req.user){
        return res.status(401).json({msg:"Unauthorized"});
    }

    const token=req.user.accessToken;

    githubService.getUserRepos(token).then(response=>{
        return res.json(response.data);
    }).catch(error=>{
        return res.status(500).json({msg:"Failed to fetch repositories", error:error.message});
    });
}


module.exports={
    getRepos
};