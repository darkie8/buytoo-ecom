// mongoose 
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// source schema declaration
const source = new schema({
  site: {
    type: String,
    default: "amazon.in"
  },
  site_section: {
    type: String,
    default: "http://www.ebay.com/sch/Cell-Phone-Cables-Adapters/123422/bn_317618/i.html&LH_ItemCondition=1000"
  },
  section_title: {
    type: String,
    default: "BigOwl-Combo-Date-Wrist-Watches/dp/B07BGR99LZ/ref=sr_1_1"
  },
  country: {
    type: String,
    default: "India"
  }
})

// description schema declaration 
const desc = new schema(
  [{
      type: String,
      default: "High quality chain 1 year manufacturer's warranty"
    },
    {
      Band_Color: {
        type: String,
        default: "Silver"
      }
    }, {
      Band_Material: {
        type: String,
        default: "Stainless Steel"
      }
    },
    {
      Watch_Movement_Type: {
        type: String,
        default: "Quartz"
      }
    }, {
      Watch_Display_Type: {
        type: String,
        default: "Analog"
      }
    },
    {
      type: String,
      default: "Suitable For-Men And Boys"
    }
  ]
)

// rating schema 

const rating = new schema({
  mean_rating: {
    type: Number,
    default: 3.6
  },
  best_rating: {
    type: Number,
    default: 5
  },
  worst_rating: {
    type: Number,
    default: 1
  },
  rating_count: {
    type: Number,
    default: 71
  },
  reviews_count: {
    type: Number,
    default: 0
  }
})

// basic schema
const basic = new schema({
  url: {
    type: String,
    default: "https://www.amazon.in/BigOwl-Combo-Date-Wrist-Watches/dp/B07BGR99LZ/ref=sr_1_1?s=watches&rps=1&ie=UTF8&qid=1523489883&sr=1-1&keywords=%2Fbigowldotdd%2F&refinements=p_85%3A10440599031%2Cp_6%3AA3ANZG9SPV27QO"
  },
  uuid: {
    type: String,
    default: "ejkd97f247da839bbec1c0c572755abce0bc5e9b"
  },
  source: [source],
  name: {
    type: String,
    default: "BigOwl-Combo-Date-Wrist-Watches"
  },
  description: [desc],
  brand: {
    type: String,
    default: "branded"
  },
  price: {
    type: String,
    default: "849"
  },
  currency: {
    type: String,
    default: "Rs."
  },
  offer_price: {
    type: String,
    default: "45%"
  },
  model: {
    type: String,
    default: "MEN03-MEN02-MEN01"
  },
  manufacturer: {
    type: String,
    default: "BigOwl"
  },
  in_stock: {
    type: String,
    default: "yes"
  },
  on_sale: {
    type: String,
    default: "yes"
  },
  product_id: {
    type: String,
    default: "MEN03-MEN02-MEN01"
  },
  Clasp: {
    type: String,
    default: "MEN03-MEN02-MEN01"
  },
  Item_Weight: {
    type: String,
    default: "100 Grams"
  },
  rating_desc: [rating],
  images: {
    type: Array,
    default: ["https://images-na.ssl-images-amazon.com/images/I/81MRiuZ-1gL._UL1500_.jpg"]
  },
  language: {
    type: String,
    default: "english"
  },
  Date_first_available_at_buytoo: {
    type: Date,
    default: Date.now
  },
  Last_bought: {
    type: Date,
    default: Date.now
  }
})

// display features schema
const Display_Features = new schema({
  Display_Size: {
    type: String,
    default: "5.6 inch"
  },
  Resolution: {
    type: String,
    default: "720 x 1480 Pixels"
  },
  Resolution_Type: {
    type: String,
    default: 'HD+'
  },
  GPU: {
    type: String,
    default: 'ARM Mali T830 MP1'
  },
  Display_Type: {
    type: String,
    default: "Super AMOLED"
  },
  Display_Colors: {
    type: String,
    default: "16M"
  }
})

// Os & Processor Features schema

const Os_and_Processor_Features = new schema({
  Operating_System: {
    type: String,
    default: "Android Oreo 8"
  },
  Processor_Type: {
    type: String,
    default: "Exynos 7870"
  },
  Processor_Core: {
    type: String,
    default: "Octa Core"
  },
  Primary_Clock_Speed: {
    type: String,
    default: "1.6 GHz"
  }
})

// Memory & Storage Features schema 
const Memory_and_Storage_Features = new schema({
  Internal_Storage: {
    type: String,
    default: "32 GB"
  },
  RAM: {
    type: String,
    default: "3 GB"
  },
  Total_Memory: {
    type: String,
    default: "32 GB"
  },
  Expandable_Storage: {
    type: String,
    default: "256 GB"
  },
  Supported_Memory_Card_Type: {
    type: String,
    default: "microSD"
  },
  Memory_Card_Slot_Type: {
    type: String,
    default: "Dedicated Slot"
  }
})

// Connectivity Features schema

const Connectivity_Features = new schema({
  Network_Type: {
    type: Array,
    default: ["4G", "4G VOLTE", "2G", "3G"]
  },
  Supported_Networks: {
    type: Array,
    default: ["4G VoLTE", "GSM", "4G LTE", "WCDMA"]
  },
  threeG: {
    type: String,
    default: "Yes"
  },
  Bluetooth_Support: {
    type: String,
    default: "Yes"
  },
  Bluetooth_Version: {
    type: Number,
    default: 4.2
  },
  Wi_Fi: {
    type: String,
    default: "Yes"
  },
  Audio_Jack: {
    type: Number,
    default: 3.5
  }
})

// Multimedia Features schema
const Multimedia_Features = new schema({
  FM_Radio: {
    type: String,
    default: "Yes"
  },
  FM_Radio_Recording: {
    type: String,
    default: "Yes"
  },
  Audio_Formats: {
    type: Array,
    default: ["MP3", "AAC", "WMA", "FLAC"]
  },
  Video_Formats: {
    type: Array,
    default: ["MP4", "AVI"]
  }
})


// Camera Features schema

const Camera_Features = new schema({
  Primary_Camera_Available: {
    type: String,
    default: "Yes"
  },
  Primary_Camera: {
    type: String,
    default: "13MP"
  },
  Primary_Camera_Features: {
    type: Array,
    default: ["Action", "Animated GIF", "Beauty Face", "Best Photo", "Face Detection", "Food", "HDR (High Dynamic Range)", "Mirror Selfie", "Panorama", "Selfie", "Sports"]
  },
  Secondary_Camera_Available: {
    type: String,
    default: "Yes"
  },
  Secondary_Camera: {
    type: String,
    default: "8MP"
  },
  Flash: {
    type: String,
    default: "Rear and Front Flash"
  },
  Full_HD_Recording: {
    type: String,
    default: "Yes"
  },
  Frame_Rate: {
    type: String,
    default: "30 fps"
  }
})

// Battery_and_Power_Features scema
const Battery_and_Power_Features = new schema({
  Battery_Capacity: {
    type: String,
    default: "3000 mAh"
  }
})

// Dimensions schema
const Dimensions = new schema({
  Width: {
    type: String,
    default: "70.2 mm"
  },
  Height: {
    type: String,
    default: "149.3 mm"
  },
  Depth: {
    type: String,
    default: "8.2 mm"
  },
  Weight: {
    type: String,
    default: "153 g"
  }
})

// Warranty and gurantee schema

const Warranty_and_Gurantee = new schema({
  Warranty_Summary: {
    type: String,
    default: "Brand Warranty of 1 Year Available for Mobile and 6 Months for Accessories"
  },
  Gurantee_Summary: {
    type: String,
    default: "Brand Gurantee of 1 Year Available for Mobile and 6 Months for Accessories"
  }
})

// ecom schema for watch declaration 
const ecomSchema_watch = new schema({
  watch_basic_info: [basic],
  Band_Colour: {
    type: String,
    default: "silver"
  },
  Display_Type: {
    type: String,
    default: "Analogue"
  },
  Dial_Colour: {
    type: String,
    default: "black"
  },
  categories: {
    type: Array,
    default: ["Analogue watches,Watchess,Accessories,Men's Fashion"]
  },
  Warranty_and_Gurantee: [Warranty_and_Gurantee]
});

const ecomSchema_mobile = new schema({
  mobile_basic_info: [basic],
  Browse_Type: {
    type: String,
    default: 'Smartphones'
  },
  SIM: {
    type: String,
    default: 'Dual Sim'
  },

  Hybrid_Sim_Slot: {
    type: String,
    default: 'No'
  },
  Touchscreen: {
    type: String,
    default: 'Yes'
  },
  OTG_Compatible: {
    type: String,
    default: 'Yes'
  },
  Display_Features: [Display_Features],
  Os_and_Processor_Features: [Os_and_Processor_Features],
  Memory_and_Storage_Features: [Memory_and_Storage_Features],
  Camera_Features: [Camera_Features],
  Connectivity_Features: [Connectivity_Features],
  Multimedia_Features: [Multimedia_Features],
  Battery_and_Power_Features: [Battery_and_Power_Features],
  Dimensions: [Dimensions],
  Smartphone: {
    type: String,
    default: "Yes"
  },
  SIM_Size: {
    type: String,
    default: "Nano Sim"
  },
  Removable_Battery: {
    type: String,
    default: "No"
  },
  Keypad: {
    type: String,
    default: "No"
  },
  Graphics_PPI: {
    type: String,
    default: "293 PPI"
  },
  Warranty_and_Gurantee: [Warranty_and_Gurantee]
})

// model declration 
mongoose.model('watches', ecomSchema_watch);
mongoose.model('mobile', ecomSchema_mobile);