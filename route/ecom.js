const appConfig = require('./../config/appConfig');
const controller = require('./../config/controller/controller_ecom');
const authorization = require('./../middlewares_custom/auth');

let setRouter = (app) => {
  let baseurl = appConfig.apiVersion + '/products';
  app.get(baseurl + '/all', controller.show_all);
/**
  * @api {get} /api/v1/products/all Get all Product info docs
  * @apiVersion 0.0.1
  * @apiGroup Read
  *
  * @apiSuccessExample {json}
  Success - Response:
    *  HTTP/1.1 200 OK
    {
      "error": false,
      "message": "All product infos found",
      "status": 200,
      "data": [
      {
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      },
      {......}
      ,......]
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json}Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/

app.post(baseurl + '/create', authorization.isAuth, controller.create_response);

 /**
	 * @api {post} /api/v1/products/create Create blog
	 * @apiVersion 0.0.1
	 * @apiGroup Create
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} type type of the product passed as a body parameter
	 * @apiParam {String} name name of the product passed as a body parameter
	 * @apiParam {String} section_title section_title of the product passed as a body parameter
	 * @apiParam {String} mean_rating mean_rating of the product passed as a body parameter
	 * @apiParam {String} best_rating best_rating of the product passed as a body parameter
   * @apiParam {String} worst_rating worst_rating of the product passed as a body parameter
	 * @apiParam {String} rating_count rating_count of the product passed as a body parameter
	 * @apiParam {String} reviews_count reviews_count of the product passed as a body parameter
	 * @apiParam {String} Band_Color Band_Color of the product passed as a body parameter
	 * @apiParam {String} Band_Material Band_Material of the product passed as a body parameter
	 * @apiParam {String} Watch_Movement_Type Watch_Movement_Type of the product passed as a body parameter
	 * @apiParam {String} Watch_Display_Type Watch_Display_Type of the product passed as a body parameter
	 * @apiParam {String} blogBody blogBody of the product passed as a body parameter
	 * @apiParam {String} Suitable Suitable of the product passed as a body parameter
   * @apiParam {String} Display_Size Display_Size of the product passed as a body parameter
	 * @apiParam {String} Resolution Resolution of the product passed as a body parameter
	 * @apiParam {String} Resolution_Type Resolution_Type of the product passed as a body parameter
	 * @apiParam {String} GPU GPU of the product passed as a body parameter
   * @apiParam {String} Display_Type Display_Type of the product passed as a body parameter
	 * @apiParam {String} Display_Colors Display_Colors of the product passed as a body parameter
	 * @apiParam {String} Operating_System Operating_System of the product passed as a body parameter
	 * @apiParam {String} Operating_System Operating_System of the product passed as a body parameter
	 * @apiParam {String} Processor_Type Processor_Type of the product passed as a body parameter
	 * @apiParam {String} Processor_Core Processor_Core of the product passed as a body parameter
	 * @apiParam {String} Primary_Clock_Speed Primary_Clock_Speed of the product passed as a body parameter
	 * @apiParam {String} Internal_Storage Internal_Storage of the product passed as a body parameter
	 * @apiParam {String} RAM RAM of the product passed as a body parameter
	 * @apiParam {String} Total_Memory Total_Memory of the product passed as a body parameter
	 * @apiParam {String} Expandable_Storage Expandable_Storage of the product passed as a body parameter
	 * @apiParam {String} Supported_Memory_Card_Type Supported_Memory_Card_Type of the product passed as a body parameter
	 * @apiParam {String} Memory_Card_Slot_Type Memory_Card_Slot_Type of the product passed as a body parameter
	 * @apiParam {String} Network_Type Network_Type of the product passed as a body parameter
	 * @apiParam {String} Supported_Networks Supported_Networks of the product passed as a body parameter
	 * @apiParam {String} threeG threeG of the product passed as a body parameter
	 * @apiParam {String} Bluetooth_Support Bluetooth_Support of the product passed as a body parameter
	 * @apiParam {String} Bluetooth_Support Bluetooth_Support of the product passed as a body parameter
	 * @apiParam {String} Wi_Fi Wi_Fi of the product passed as a body parameter
	 * @apiParam {Number} Audio_Jack Audio_Jack of the product passed as a body parameter
	 * @apiParam {String} Audio_Formats Audio_Formats of the product passed as a body parameter
	 * @apiParam {String} Video_Formats Video_Formats of the product passed as a body parameter
	 * @apiParam {String} FM_Radio FM_Radio of the product passed as a body parameter
	 * @apiParam {String} FM_Radio_Recording FM_Radio_Recording of the product passed as a body parameter
	 * @apiParam {String} Primary_Camera_Available Primary_Camera_Available of the product passed as a body parameter
	 * @apiParam {String} Primary_Camera Primary_Camera of the product passed as a body parameter
	 * @apiParam {String} Primary_Camera_Features Primary_Camera_Features of the product passed as a body parameter
	 * @apiParam {String} econdary_Camera_Available Secondary_Camera_Available of the product passed as a body parameter
   * @apiParam {String} Secondary_Camera Secondary_Camera of the product passed as a body parameter
   * @apiParam {String} Flash Flash of the product passed as a body parameter
   * @apiParam {String} Full_HD_Recording Full_HD_Recording of the product passed as a body parameter
   * @apiParam {String} Frame_Rate Frame_Rate of the product passed as a body parameter
   * @apiParam {String} Battery_Capacity Battery_Capacity of the product passed as a body parameter
   * @apiParam {String} Width Width of the product passed as a body parameter
   * @apiParam {String} Height Height of the product passed as a body parameter
   * @apiParam {String} Depth Depth of the product passed as a body parameter
   * @apiParam {String} Weight Weight of the product passed as a body parameter
   * @apiParam {String} Bought_amount Bought_amount of the product passed as a body parameter
   * @apiParam {String} users users of the product passed as a body parameter
   * @apiParam {String} number_of_times number_of_times of the product passed as a body parameter
   * @apiParam {String} Warranty_Summary Warranty_Summary of the product passed as a body parameter
   * @apiParam {String} Gurantee_Summary Gurantee_Summary of the product passed as a body parameter
   * @apiParam {String} source source of the product passed as a body parameter
   * @apiParam {String} name name of the product passed as a body parameter
   * @apiParam {String} description desc of the product passed as a body parameter
   * @apiParam {String} brand brand of the product passed as a body parameter
   * @apiParam {String} price price of the product passed as a body parameter
   * @apiParam {String} currency currency of the product passed as a body parameter
   * @apiParam {String} offer_price offer_price of the product passed as a body parameter
   * @apiParam {String} model model of the product passed as a body parameter
   * @apiParam {String} manufacturer manufacturer of the product passed as a body parameter
   * @apiParam {String} in_stock in_stock of the product passed as a body parameter
   * @apiParam {String} on_sale on_sale of the product passed as a body parameter
   * @apiParam {String} Item_Weight Item_Weight of the product passed as a body parameter
   * @apiParam {String} images images of the product passed as a body parameter
   * @apiParam {String} language language of the product passed as a body parameter
   * @apiParam {String} Last_bought Last_bought of the product passed as a body parameter
   * @apiParam {String} Browse_Type Browse_Type of the product passed as a body parameter
   * @apiParam {String} categories categories of the product passed as a body parameter
   * @apiParam {String} Band_Colour Band_Color of the product passed as a body parameter
   * @apiParam {String} Display_Type Display_Type of the product passed as a body parameter
   * @apiParam {String} Dial_Colour Dial_Colour of the product passed as a body parameter
   * @apiParam {String} SIM SIM of the product passed as a body parameter
   * @apiParam {String} Hybrid_Sim_Slot Hybrid_Sim_Slot of the product passed as a body parameter
   * @apiParam {String} Touchscreen Touchscreen of the product passed as a body parameter
   * @apiParam {String} OTG_Compatible OTG_Compatible of the product passed as a body parameter
   * @apiParam {String} Smartphone Smartphone of the product passed as a body parameter
   * @apiParam {String} SIM_Size SIM_Size of the product passed as a body parameter
   * @apiParam {String} Removable_Battery Removable_Battery of the product passed as a body parameter
   * @apiParam {String} Keypad Keypad of the product passed as a body parameter
   * @apiParam {String} Graphics_PPI Graphics_PPI of the product passed as a body parameter
   * @apiParam {Boolean} Added_to_cart Added_to_cart of the product passed as a body parameter
   * @apiParam {String} Added_to_cart_by Added_to_cart_by of the product passed as a body parameter
   * 
	 *  @apiSuccessExample {json} Success-Response:
   *  HTTP/1.1 200 OK
	 * {
      "error": false,
      "message": "id: ${id} product's info in now in the database",
      "status": 200,
      "data": [
      {
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      }]
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
  {
    "error": true,
    "message": "Failed to create Product info",
    "status": 500,
    "data": null
  }
*/
app.get(baseurl + '/view/product_id/:product_id', controller.viewByproduct_id);

    /**
	 * @api {get} /view/product_id/:product_id Get a single product info of a certain product_id
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": " infos has been updated",
      "status": 200,
      "data": 
      {
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      }
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/



app.get(baseurl + '/view/uuid/:uuid', controller.viewBy_uuid);

  /**
	 * @api {get} /view/product_id/:uuid Get a single product info of a certain uuid
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} uuid The uuid should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": " infos has been updated",
      "status": 200,
      "data": 
      {
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      }
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/

app.get(baseurl + '/view/categories/:categories', controller.viewByCategory);

  /**
	 * @api {get} /view/product_id/:categories Get   product infos based on same category
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} categories The categories should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been found",
      "status": 200,
      "data": 
      [{
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      },{....},....]
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/
app.put(baseurl + '/edit/:product_id', authorization.isAuth, controller.editProduct_info);

 /**
	 * @api {put} /edit/:product_id Edit product infos with a certain product_id
	 * @apiVersion 0.0.1
	 * @apiGroup Edit
	 *
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
   * 
	 * @apiParam {String} type type of the product passed as a body parameter
   * @apiParam {String} name name of the product passed as a body parameter.
   * @apiParam (basic_response){String} name name of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} brand brand of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} price price of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} currency currency of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} offer_price offer_price of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} model model of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} manufacturer manufacturer of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} in_stock in_stock of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} on_sale on_sale of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} Item_Weight Item_Weight of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} language language of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_response){String} Last_bought Last_bought of the product passed as a body parameter.  Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['source']){String} section_title section_title of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['source']){String} mean_rating mean_rating of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['rating_desc']){String} best_rating best_rating of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['rating_desc']){String} worst_rating worst_rating of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['rating_desc']){String} rating_count rating_count of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['rating_desc']){String} reviews_count reviews_count of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['description']){String} Band_Color Band_Color of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['description']){String} Band_Material Band_Material of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['description']){String} Watch_Movement_Type Watch_Movement_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['description']){String} Watch_Display_Type Watch_Display_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (basic_info['description']){String} Suitable Suitable of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Display_Features) {String} Display_Size Display_Size of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Display_Features) {String} Resolution Resolution of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Display_Features) {String} Resolution_Type Resolution_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Display_Features) {String} GPU GPU of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Display_Features) {String} Display_Type Display_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Display_Features) {String} Display_Colors Display_Colors of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Os_and_Processor_Features) {String} Operating_System Operating_System of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Os_and_Processor_Features) {String} Operating_System Operating_System of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Os_and_Processor_Features) {String} Processor_Type Processor_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Os_and_Processor_Features) {String} Processor_Core Processor_Core of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Os_and_Processor_Features) {String} Primary_Clock_Speed Primary_Clock_Speed of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Memory_and_Storage_Features) {String} Internal_Storage Internal_Storage of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Memory_and_Storage_Features) {String} RAM RAM of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Memory_and_Storage_Features) {String} Total_Memory Total_Memory of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Memory_and_Storage_Features) {String} Expandable_Storage Expandable_Storage of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Memory_and_Storage_Features) {String} Supported_Memory_Card_Type Supported_Memory_Card_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Memory_and_Storage_Features) {String} Memory_Card_Slot_Type Memory_Card_Slot_Type of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Connectivity_Features){String} threeG threeG of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Connectivity_Features){String} Bluetooth_Support Bluetooth_Support of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Connectivity_Features){String} Bluetooth_Support Bluetooth_Support of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Connectivity_Features){String} Wi_Fi Wi_Fi of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Connectivity_Features){Number} Audio_Jack Audio_Jack of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Multimedia_Features) {String} FM_Radio FM_Radio of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Multimedia_Features) {String} FM_Radio_Recording FM_Radio_Recording of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Primary_Camera_Available Primary_Camera_Available of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Primary_Camera Primary_Camera of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Secondary_Camera_Available Secondary_Camera_Available of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Secondary_Camera Secondary_Camera of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Flash Flash of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Full_HD_Recording Full_HD_Recording of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Camera_Features) {String} Frame_Rate Frame_Rate of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Battery_and_Power_Features) {String} Battery_Capacity Battery_Capacity of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Dimensions) {String} Width Width of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Dimensions) {String} Height Height of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Dimensions) {String} Depth Depth of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Dimensions) {String} Weight Weight of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Warranty_and_Gurantee) {String} Warranty_Summary Warranty_Summary of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam (Warranty_and_Gurantee) {String} Gurantee_Summary Gurantee_Summary of the product passed as a body parameter. Param group will be attached before the parameter as an Object key sequence.
   * @apiParam {String} Browse_Type Browse_Type of the product passed as a body parameter
   * @apiParam {String} Band_Colour Band_Color of the product passed as a body parameter
   * @apiParam {String} Display_Type Display_Type of the product passed as a body parameter
   * @apiParam {String} Dial_Colour Dial_Colour of the product passed as a body parameter
   * @apiParam {String} SIM SIM of the product passed as a body parameter
   * @apiParam {String} Hybrid_Sim_Slot Hybrid_Sim_Slot of the product passed as a body parameter
   * @apiParam {String} Touchscreen Touchscreen of the product passed as a body parameter
   * @apiParam {String} OTG_Compatible OTG_Compatible of the product passed as a body parameter
   * @apiParam {String} Smartphone Smartphone of the product passed as a body parameter
   * @apiParam {String} SIM_Size SIM_Size of the product passed as a body parameter
   * @apiParam {String} Removable_Battery Removable_Battery of the product passed as a body parameter
   * @apiParam {String} Keypad Keypad of the product passed as a body parameter
   * @apiParam {String} Graphics_PPI Graphics_PPI of the product passed as a body parameter
   * @apiParam {Boolean} Added_to_cart Added_to_cart of the product passed as a body parameter
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been updated",
      "status": 200,
      "data": 
       {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "Failed to edit the doc",
    "status": 500,
    "data": null
  }
*/
app.post(baseurl + '/delete/:product_id', authorization.isAuth, controller.deleteProduct_info);

 /**
	 * @api {post} /delete/:product_id Delete product infos with a certain product_id
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "${req.params.product_id} id product info doc has been deleted",
      "status": 200,
      "data":  []
    }
*
@apiErrorExample {json}
Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
* @apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "Failed to delete the doc",
    "status": 500,
    "data": null
  }
*/

app.post(baseurl + '/delete/categories/:categories', authorization.isAuth, controller.deletePrduct_info_byCategory);

/**
	 * @api {post} /delete/categories/:categories Delete product infos with a certain categories
	 * @apiVersion 0.0.1
	 * @apiGroup Delete
	 *
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} categories The categories should be passed as the URL parameter. give multiple input placing '_' inbetween.
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been deleted",
      "status": 200,
      "data":  []
    }
* @apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
* @apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/

app.put(baseurl + '/update/offer_price/:product_id', authorization.isAuth, controller.implementing_offer_price);

/**
	 * @api {put} /update/offer_price/:product_id Edit offer_price of product infos with a certain product_id
	 * @apiVersion 0.0.1
	 * @apiGroup Edit
	 *
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
   * 
	 * @apiParam {String} offer_price offer_price of the product passed as a body parameter
   * 
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been updated",
      "status": 200,
      "data": 
       {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/

app.put(baseurl + '/update/added_to_cart/:product_id', authorization.isAuth, controller.addremoveProduct_to_cart);

/**
	 * @api {put} /update/added_to_cart/:product_id Edit added_to_cart of product infos with a certain product_id
	 * @apiVersion 0.0.1
	 * @apiGroup Edit
	 *
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
   * 
	 * @apiParam {Boolean} Added_to_cart Added_to_cart of the product passed as a body parameter
   * 
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been updated",
      "status": 200,
      "data": 
       {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/

app.get(baseurl + '/view/added_to_cart/:Added_to_cart',authorization.isAuth_user, controller.findproductsadded_to_cart_or_not_added);

/**
	 * @api {get} /view/users/:users Get  product infos based on same Added_to_cart
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {Boolean} Added_to_cart Added_to_cart should be passed as the URL parameter
   * 
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been found",
      "status": 200,
      "data": 
      [{
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      },{....},....]
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/


app.put(baseurl + '/update/user_bought/:product_id', authorization.isAuth_user, controller.addUser_amout_bought);

/**
	 * @api {put} /update/user_bought/:product_id Edit added_to_cart of product infos with a certain product_id
	 * @apiVersion 0.0.1
	 * @apiGroup Edit
	 * @apiParam {String} accessor accessor passed as a body parameter(if the value is 'user' only registered user can access and if value is 'admin' authToken is needed)
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
   * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
   * 
	 * @apiParam {String} users users of the product passed as a body parameter
   * @apiParam {String} number_of_times number_of_times of the product passed as a body parameter
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been updated",
      "status": 200,
      "data": 
       {
        "n": 1,
        "nModified": 1,
        "ok": 1
    }
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/

app.get(baseurl + '/view/users/:users', authorization.isAuth, controller.viewByusers_bought_by);

/**
	 * @api {get} /view/users/:users Get   product infos based on same category
	 * @apiVersion 0.0.1
	 * @apiGroup Read
	 *
	 * @apiParam {String} authToken The token for authentication.(Send authToken as query parameter, body parameter or as a header)
	 * @apiParam {String} product_id The product_id should be passed as the URL parameter
   * 
	 *  @apiSuccessExample {json}  Success - Response:
   *  HTTP/1.1 200 OK
   * {
      "error": false,
      "message": "products' infos has been found",
      "status": 200,
      "data": 
      [{
        basic_info: {
          url: 'string',
          uuid: 'string',
          source: {
            site: 'string',
            site_section: 'string',
            section_title: 'string',
            country: 'string'
          },
          name: 'string',
          description: {
            Band_Color: 'string',
            Band_Material: 'string',

            Watch_Movement_Type: 'string',
            Watch_Display_Type: 'string',

            Suitable: 'string'
          },
          brand: 'string',
          price: 'string',
          currency: 'string',
          offer_price: 'string',
          model: 'string',
          manufacturer: 'string',
          in_stock: 'string',
          on_sale: 'string',
          product_id: 'string',
          Clasp: 'string',
          Item_Weight: 'string',
          rating_desc: {
            mean_rating: number,
            best_rating: number,
            worst_rating: number,
            rating_count: number,
            reviews_count: number
          },
          images: ['default url'],
          language: 'string',
          Date_first_available_at_buytoo: 'date',
          Last_bought: 'date'
        },
        Band_Colour: 'string',
        Display_Type: 'string',
        Dial_Colour: 'string',
        categories: ['default'],
        Browse_Type: 'string',
        SIM: 'string',

        Hybrid_Sim_Slot: 'string',
        Touchscreen: 'string',
        OTG_Compatible: 'string',
        Display_Features: {
          Display_Size: 'string',
          Resolution: 'string',
          Resolution_Type: 'string',
          GPU: 'string',
          Display_Type: 'string',
          Display_Colors: 'string'
        },
        Os_and_Processor_Features: {
          Operating_System: 'string',
          Processor_Type: 'string',
          Processor_Core: 'string',
          Primary_Clock_Speed: 'string'
        },
        Memory_and_Storage_Features: {
          Internal_Storage: 'string',
          RAM: 'string',
          Total_Memory: 'string',
          Expandable_Storage: 'string',
          Supported_Memory_Card_Type: 'string',
          Memory_Card_Slot_Type: 'string'
        },
        Camera_Features: {
          Primary_Camera_Available: 'string',
          Primary_Camera: 'string',
          Primary_Camera_Features: ['default'],
          Secondary_Camera_Available: 'string',
          Secondary_Camera: 'string',
          Flash: 'string',
          Full_HD_Recording: 'string',
          Frame_Rate: 'string'
        },
        Connectivity_Features: {
          Network_Type: ['default'],
          Supported_Networks: ['default'],
          threeG: 'string',
          Bluetooth_Support: 'string',
          Bluetooth_Version: number,
          Wi_Fi: 'string',
          Audio_Jack: number
        },
        Multimedia_Features: {
          FM_Radio: 'string',
          FM_Radio_Recording: 'string',
          Audio_Formats: ['default'],
          Video_Formats: ['default']
        },
        Battery_and_Power_Features: {
          Battery_Capacity: 'string'
        },
        Dimensions: {
          Width: 'string',
          Height: 'string',
          Depth: 'string',
          Weight: 'string'
        },
        Smartphone: 'string',
        SIM_Size: 'string',
        Removable_Battery: 'string',
        Keypad: 'string',
        Graphics_PPI: 'string',
        Added_to_cart: false,
        Added_to_cart_by: ['user'],
        Bought_amount: number,
        Bought_by: {
          users: ['default'],
          number_of_times: [number]
        },
        Warranty_and_Gurantee: {
          Warranty_Summary: 'string',
          Gurantee_Summary: 'string'
        }
      },{....},....]
    }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 404 Not Found
  *{
    "error": true,
    "message": "product info can not be found",
    "status": 404,
    "data": null
  }
*
@apiErrorExample {json} Error - Response:
  * HTTP/1.1 500 internal server error
 * {
    "error": true,
    "message": "internal server error",
    "status": 500,
    "data": null
  }
*/


}

module.exports = {
  setRouter: setRouter
}