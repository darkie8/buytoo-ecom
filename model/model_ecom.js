// mongoose 
const mongoose = require("mongoose");
const schema = mongoose.Schema;

// source schema declaration
const source = new schema({
  site: {
    type: String,
    
  },
  site_section: {
    type: String,
    
  },
  section_title: {
    type: String,
    
  },
  country: {
    type: String,
   
  }
})

// description schema declaration 
const desc = new schema(
  {
      Band_Color: {
        type: String,
        
      
    }, 
      Band_Material: {
        type: String,
       
      
    },
    
      Watch_Movement_Type: {
        type: String,
        
      
    }, 
      Watch_Display_Type: {
        type: String,
        
      
    },
    
      Suitable: {type: String,
      
    
  }
}
)

// rating schema 

const rating = new schema({
  mean_rating: {
    type: Number,
   
  },
  best_rating: {
    type: Number,
   
  },
  worst_rating: {
    type: Number,
    
  },
  rating_count: {
    type: Number,
    
  },
  reviews_count: {
    type: Number,
    
  }
})

// basic schema
const basic = new schema({
  url: {
    type: String,
    
  },
  uuid: {
    type: String,
    unique: true
  },
  source: source,
  name: {
    type: String,
    
  },
  description: desc,
  brand: {
    type: String,
   
  },
  price: {
    type: String,
    
  },
  currency: {
    type: String,
    
  },
  offer_price: {
    type: String,
   
  },
  model: {
    type: String,
    
  },
  manufacturer: {
    type: String,
    
  },
  in_stock: {
    type: String,
    
  },
  on_sale: {
    type: String,
    
  },
  product_id: {
    type: String,
    unique: true
  },
  Clasp: {
    type: String,
    unique: true
  },
  Item_Weight: {
    type: String,
    
  },
  rating_desc: rating,
  images: {
    type: Array,
   
  },
  language: {
    type: String,
    
  },
  Date_first_available_at_buytoo: {
    type: String,
    
  },
  Last_bought: {
    type: Date,
    
  }
})

// display features schema
const Display_Features = new schema({
  Display_Size: {
    type: String,
    
  },
  Resolution: {
    type: String,
   
  },
  Resolution_Type: {
    type: String,
    
  },
  GPU: {
    type: String,
    
  },
  Display_Type: {
    type: String,
   
  },
  Display_Colors: {
    type: String,
   
  }
})

// Os & Processor Features schema

const Os_and_Processor_Features = new schema({
  Operating_System: {
    type: String,
    
  },
  Processor_Type: {
    type: String,
   
  },
  Processor_Core: {
    type: String,
    
  },
  Primary_Clock_Speed: {
    type: String,
    
  }
})

// Memory & Storage Features schema 
const Memory_and_Storage_Features = new schema({
  Internal_Storage: {
    type: String,
    
  },
  RAM: {
    type: String,
  
  },
  Total_Memory: {
    type: String,
    
  },
  Expandable_Storage: {
    type: String,
    
  },
  Supported_Memory_Card_Type: {
    type: String,
  
  },
  Memory_Card_Slot_Type: {
    type: String,
    
  }
})

// Connectivity Features schema

const Connectivity_Features = new schema({
  Network_Type: {
    type: Array,
   
  },
  Supported_Networks: {
    type: Array,
   
  },
  threeG: {
    type: String,
    
  },
  Bluetooth_Support: {
    type: String,
   
  },
  Bluetooth_Version: {
    type: Number,
  
  },
  Wi_Fi: {
    type: String,
  
  },
  Audio_Jack: {
    type: Number,
   
  }
})

// Multimedia Features schema
const Multimedia_Features = new schema({
  FM_Radio: {
    type: String,
   
  },
  FM_Radio_Recording: {
    type: String,
   
  },
  Audio_Formats: {
    type: Array,
   
  },
  Video_Formats: {
    type: Array,
    
  }
})


// Camera Features schema

const Camera_Features = new schema({
  Primary_Camera_Available: {
    type: String,
    
  },
  Primary_Camera: {
    type: String,
  
  },
  Primary_Camera_Features: {
    type: Array,
  
  },
  Secondary_Camera_Available: {
    type: String,
   
  },
  Secondary_Camera: {
    type: String,
   
  },
  Flash: {
    type: String,
   
  },
  Full_HD_Recording: {
    type: String,
  
  },
  Frame_Rate: {
    type: String,
   
  }
})

// Battery_and_Power_Features scema
const Battery_and_Power_Features = new schema({
  Battery_Capacity: {
    type: String,
 
  }
})

// Dimensions schema
const Dimensions = new schema({
  Width: {
    type: String,
    
  },
  Height: {
    type: String,
  
  },
  Depth: {
    type: String,
   
  },
  Weight: {
    type: String,
  
  }
})

// Warranty and gurantee schema

const Warranty_and_Gurantee = new schema({
  Warranty_Summary: {
    type: String,
    
  },
  Gurantee_Summary: {
    type: String,
   
  }
})

// ecom schema for watch declaration 
const ecomSchema_watch = new schema({
  watch_basic_info: basic,
  Band_Colour: {
    type: String,
  
  },
  Display_Type: {
    type: String,
   
  },
  Dial_Colour: {
    type: String,
    
  },
  categories: {
    type: Array,
   
  },
  Warranty_and_Gurantee: Warranty_and_Gurantee
});

const ecomSchema_mobile = new schema({
  mobile_basic_info: basic,
  Browse_Type: {
    type: String,
    
  },
  SIM: {
    type: String,
    
  },

  Hybrid_Sim_Slot: {
    type: String,
   
  },
  Touchscreen: {
    type: String,
    
  },
  OTG_Compatible: {
    type: String,
   
  },
  Display_Features: Display_Features,
  Os_and_Processor_Features: Os_and_Processor_Features,
  Memory_and_Storage_Features: Memory_and_Storage_Features,
  Camera_Features: Camera_Features,
  Connectivity_Features: Connectivity_Features,
  Multimedia_Features: Multimedia_Features,
  Battery_and_Power_Features: Battery_and_Power_Features,
  Dimensions: Dimensions,
  Smartphone: {
    type: String,
   
  },
  SIM_Size: {
    type: String,
    
  },
  Removable_Battery: {
    type: String,
    
  },
  Keypad: {
    type: String,
    
  },
  Graphics_PPI: {
    type: String,
    
  },
  Warranty_and_Gurantee: Warranty_and_Gurantee
})

// model declration 
mongoose.model('source', source);
mongoose.model('rating', rating);
mongoose.model('description', desc);
mongoose.model('display', Display_Features);
mongoose.model('os_processor', Os_and_Processor_Features);
mongoose.model('memory', Memory_and_Storage_Features);
mongoose.model('connectivity', Connectivity_Features);
mongoose.model('multimedia', Multimedia_Features);
mongoose.model('camera', Camera_Features);
mongoose.model('battery', Battery_and_Power_Features);
mongoose.model('dimensions', Dimensions);
mongoose.model('warrany_gurantee', Warranty_and_Gurantee);
mongoose.model('basic', basic);
mongoose.model('watches', ecomSchema_watch);
mongoose.model('mobiles', ecomSchema_mobile);
