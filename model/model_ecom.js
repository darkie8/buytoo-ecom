// mongoose 
let mongoose = require("mongoose");
let schema = mongoose.Schema;

// source schema declaration
let source = new schema({
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
let desc = new schema(
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

let rating = new schema({
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
let basic_info = new schema({
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
let Display_Features = new schema({
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

let Os_and_Processor_Features = new schema({
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
let Memory_and_Storage_Features = new schema({
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

let Connectivity_Features = new schema({
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
let Multimedia_Features = new schema({
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

let Camera_Features = new schema({
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
let Battery_and_Power_Features = new schema({
  Battery_Capacity: {
    type: String,
 
  }
})

// Dimensions schema
let Dimensions = new schema({
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

let Warranty_and_Gurantee = new schema({
  Warranty_Summary: {
    type: String,
    
  },
  Gurantee_Summary: {
    type: String,
   
  }
})

// ecom schema for watch declaration 
let ecomSchema = new schema({
  basic_info: basic_info,
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

let test_6  = new schema({
  basic_info: basic_info,
  Display_Features: Display_Features,
})

// model declration 
mongoose.model('test_6_basic_info_source', source)
mongoose.model('test_6_basic_info_desc', desc)
mongoose.model('test_6_basic_info_rating', rating)
mongoose.model('test_6_basic_info', basic_info)
mongoose.model('display1', Display_Features);
mongoose.model('os_processor1', Os_and_Processor_Features);
mongoose.model('memory1', Memory_and_Storage_Features);
mongoose.model('connectivity1', Connectivity_Features);
mongoose.model('multimedia1', Multimedia_Features);
mongoose.model('camera1', Camera_Features);
mongoose.model('battery1', Battery_and_Power_Features);
mongoose.model('dimensions1', Dimensions);
mongoose.model('warrany_gurantee2', Warranty_and_Gurantee);
mongoose.model('test_6', test_6)
mongoose.model('model_ecomF', ecomSchema);





