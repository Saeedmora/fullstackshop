import mongoose from "mongoose";
const orderSchema = mongoose.Schema({
  user:{
    type: mongoose.Schema.Types.ObjectId,
    required:true,
    ref:"User",

  },
  orderItems:[{
    name:{type:String,requiered :true},
    qty:{type:Number,required:true},
    image:{type:String,required:true},
    price:{type:Number,required:true},
    product:{
      type :mongoose.Schema.Types.ObjectId,
      required:true,
      ref:"Product",
    },
  }],
  shippingAdress:{
    adress:{type:String,requiered :true},
    city:{type:String,requiered :true},
    postalCode:{type:String,requiered :true},
    country:{type:String,requiered :true},
  },
  paymentMethode:{
    type: String,
    required:true,

  },
  paymentResult:{
    id:{type:String},
    status:{type:String},
    update_time:{type:String},
    email_adress:{type:String},
  },
  itemsPrice:{
   type:Number,
   required:true,
   default:0.0,

  },
  taxPrice:{
    type:Number,
    required:true,
    default:0.0,
  },
  shippingPrice:{
    type:Number,
    required:true,
    default:0.0,
  },
  totalPrice:{
    type:Number,
   required:true,
   default:0.0,
  },
  isPaid:{
    type:Boolean,
    required:true,
    default:false,
  },
  paidAt:{},
  isDelivered:{
    type:Boolean,
    required:true,
    default:false,
  },
  deliveredsAt:{
    taype:Date,
  },
},{timestampes:true,});

const Order = mongoose.model("Order",orderSchema);

export default Order;