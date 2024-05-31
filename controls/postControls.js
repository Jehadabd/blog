const Post = require('../moduls/post');
const User = require('../moduls/user')

exports.create = async (req, res) => {
    try {
        const { title, content } = req.body;

        console.log(req.userId);
        const post = new Post({ title, content, author: req.userId });

        const user = await User.findById(req.userId);
        if (user) {
            user.posts.push(post);
            await post.save();
            await user.save();
            console.log('done')
        }
        res.status(200).json({ data: post });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};
exports.find = async (req, res) => {

}
exports.list = async (req, res) => {
    const post =  await Post.find().select('-comments -_id  -__v')

    console.log(post)
    res.json({
        name:post
    })
}
exports.listComments = async (req, res) => {
    const{id}=req.params
    const post =  await Post.findById(id).select('comments').select('-_id').populate('comments.comment','comment')

    console.log(post)
    res.json({
        name:post
    })
}
exports.addComment = async (req, res) => {

    const { id } = req.params;
    const { comment } = req.body
    const post = await Post.findById(id)

    if (!post) {
        res.status(401).json({
            message: "not found "
        })
    }
    await Post.updateOne({ _id: id }, {
        $push: {
            comments: {
                user: req.userId, comment
            }
        }
    }
    )
    post.save()
    res.status(201).json({
        success: true
    })

}
exports.acouint=async(req,res)=>{
    let index=0;
    const { id } = req.params;
    let postt=[]
    const user=await User.findById(id)
    const post=await Post.find({where:{author:id}})
    console.log(user.posts.length)
    for(let i=0; i<user.posts.length;i++){
        
     postt[index]=await Post.findById(user.posts[i]._id).select('-comments -_id -author -__v')
     index++;
    }
    res.json({
        data:postt
    })
}