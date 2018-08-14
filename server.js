var express=require('express')
var app=express()
var mongoose=require('mongoose')
var bodyParser=require('body-parser')
var path=require('path')

app.use(express.static(path.join(__dirname,'/public/dist/public')))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost/RateMyCakesDB')
var RatingSchema = new mongoose.Schema({
    rating:{type:Number, required:[true, 'Ratings need a rating']},
    comment:{type:String, required:[true, 'Let the baker know why you scored them how you did!'], minlength:3}
})
var CakeSchema=new mongoose.Schema({
    baker:{type:String, required:[true, 'Who baked this cake?'], minlength:1},
    imagePath:{type:String, required:[true, 'Your cake needs an image'], minlength:2},
    ratings:[RatingSchema]
})
mongoose.model('Rating', RatingSchema)
mongoose.model('Cake', CakeSchema)
var Rating=mongoose.model('Rating')
var Cake=mongoose.model('Cake')

app.get('/cakes', function(request, response){
    Cake.find({}, function(error, cakes){
        if(error){
            response.json({success:0, message:"Unable to fetch all cakes"})
        }
        else{
            response.json({success:1, message:"Successfully fetched all cakes", cakes:cakes})
        }
    })
})
app.post('/cakes', function(request, response){
    var newCake=new Cake(request.body)
    newCake.save(function(error){
        if(error){
            response.json({success:0, message:'Unable to save this new cake'})
        }
        else{
            response.json({success:1, message:'Successfully created cake!', cake:newCake})
        }
    })
})
app.get('/cakes/:cakeID', function(request, response){
    Cake.findOne({_id:request.params.cakeID}, function(error, cake){
        if(error){
            response.json({success:0, message:'Invalid ID'})
        }
        else{
            if(cake==null){
                response.json({success:0, message:'No cake exists with this id'})
            }
            else{
                response.json({success:1, message:"Successfully fetched your cake", cake:cake})
            }
        }
    })
})
app.post('/rating', function(request, response){
    Cake.findOne({_id: request.body.cakeID}, function(error, cake){
        if(error){
            response.json({success:0, message:'Failed to get cake'})
        }
        else{
            if(cake==null){
                response.json({success:0, message:'No cake exists with this id'})
            }
            else{
                var newRating=new Rating({rating:request.body.rating, comment:request.body.comment})
                newRating.save(function(error){
                    if(error){
                        response.json({success:0, message:'Failed to create rating', error:error})
                    }
                    else{
                        cake.ratings.push(newRating)
                        cake.save(function(error){
                            if(error){
                                response.json({success:0, message:'Failed to save rating to cake'})
                            }
                            else{
                                response.json({success:1, message:'Successfully created rating'})
                            }
                        })
                    }
                })
            }
        }
    })
})

app.listen(8000, function(){
    console.log('Listening on port 8000')
})