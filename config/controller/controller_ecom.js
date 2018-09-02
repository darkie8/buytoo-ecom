const mongoose = require('mongoose');
const shortid = require('shortid');

// library usage declaration
const responses = require('./../../library/responseLib');
const time = require('./../../library/timeLib');
const check = require('./../../library/checkLib');
const logger = require('./../../library/loggerLib');
const other = require('./../../library/othersLib')
// Importing model_ecom 
const response_model = {
    source: mongoose.model('source'),
    rating: mongoose.model('rating'),
    desc: mongoose.model('description'),
    Display_Features: mongoose.model('display'),
    Os_and_Processor_Features: mongoose.model('os_processor'),
    Memory_and_Storage_Features: mongoose.model('memory'),
    Connectivity_Features: mongoose.model('connectivity'),
    Multimedia_Features: mongoose.model('multimedia'),
    Camera_Features: mongoose.model('camera'),
    Battery_and_Power_Features: mongoose.model('battery'),
    Dimensions: mongoose.model('dimensions'),
    Warranty_and_Gurantee: mongoose.model('warrany_gurantee'),
    basic: mongoose.model('basic'),
    watches: mongoose.model('watches'),
    mobiles: mongoose.model('mobiles')
}

// creating product info document in database
let create_response = (req, res) => {

    let reqBod = req.body;


    let source = new response_model.source({
        site: 'https://buytoo.in',
        site_section: `https://buytoo.in/${reqBod.type}/${reqBod.name}`,
        section_title: reqBod.section_title,
        country: 'India'
    })
    let rating = new response_model.rating({
        mean_rating: reqBod.mean_rating,
        best_rating: reqBod.best_rating,
        worst_rating: reqBod.worst_rating,
        rating_count: reqBod.rating_count,
        reviews_count: reqBod.reviews_count
    })

    let desc = new response_model.desc({
        Band_Color: reqBod.Band_Color,
        Band_Material: reqBod.Band_Material,
        Watch_Movement_Type: reqBod.Watch_Movement_Type,
        Watch_Display_Type: reqBod.Watch_Display_Type,
        Suitable: reqBod.Suitable
    })

    let Display_Features = new response_model.Display_Features({
        Display_Size: reqBod.Display_Size,
        Resolution: reqBod.Resolution,
        Resolution_Type: reqBod.Resolution_Type,
        GPU: reqBod.GPU,
        Display_Type: reqBod,
        Display_Colors: reqBod.Display_Colors
    })

    let Os_and_Processor_Features = new response_model.Os_and_Processor_Features({
        Operating_System: reqBod.Operating_System,
        Processor_Type: reqBod.Processor_Type,
        Processor_Core: reqBod.Processor_Core,
        Primary_Clock_Speed: reqBod.Primary_Clock_Speed
    })

    let Memory_and_Storage_Features = new response_model.Memory_and_Storage_Features({
        Internal_Storage: reqBod.Internal_Storage,
        RAM: reqBod.RAM,
        Total_Memory: reqBod.Total_Memory,
        Expandable_Storage: reqBod.Expandable_Storage,
        Supported_Memory_Card_Type: reqBod.Supported_Memory_Card_Type,
        Memory_Card_Slot_Type: reqBod.Memory_Card_Slot_Type
    })

    let Connectivity_Features = new response_model.Connectivity_Features({
        Network_Type: reqBod.Network_Type,
        Supported_Networks: reqBod.Supported_Networks,
        threeG: reqBod.threeG,
        Bluetooth_Support: reqBod.Bluetooth_Support,
        Bluetooth_Version: reqBod.Bluetooth_Support,
        Wi_Fi: reqBod.Wi_Fi,
        Audio_Jack: reqBod.Audio_Jack
    })

    let Multimedia_Features = new response_model.Multimedia_Features({
        FM_Radio: reqBod.FM_Radio,
        FM_Radio_Recording: reqBod.FM_Radio_Recording,
        Audio_Formats: reqBod.Audio_Formats,
        Video_Formats: reqBod.Video_Formats
    })

    let Camera_Features = new response_model.Camera_Features({
        Primary_Camera_Available: reqBod.Primary_Camera_Available,
        Primary_Camera: reqBod.Primary_Camera,
        Primary_Camera_Features: reqBod.Primary_Camera_Features,
        Secondary_Camera_Available: reqBod.Secondary_Camera_Available,
        Secondary_Camera: reqBod.Secondary_Camera,
        Flash: reqBod.Flash,
        Full_HD_Recording: reqBod.Full_HD_Recording,
        Frame_Rate: reqBod.Frame_Rate
    })

    let Battery_and_Power_Features = new response_model.Battery_and_Power_Features({
        Battery_Capacity: reqBod.Battery_Capacity
    })

    let Dimensions = new response_model.Dimensions({
        Width: reqBod.Width,
        Height: reqBod.Height,
        Depth: reqBod.Depth,
        Weight: reqBod.Weight
    })

    let Warranty_and_Gurantee = new response_model.Warranty_and_Gurantee({
        Warranty_Summary: reqBod.Warranty_Summary,
        Gurantee_Summary: reqBod.Gurantee_Summary
    })

    let basic_response = new response_model.basic({
        url: 'https://buytoo.in',
        uuid: shortid.generate(),
        source: source,
        name: reqBod.name,
        description: desc,
        brand: reqBod.brand,
        price: reqBod.price,
        currency: reqBod.currency,
        offer_price: reqBod.offer_price,
        model: reqBod.model,
        manufacturer: reqBod.manufacturer,
        in_stock: reqBod.in_stock,
        on_sale: reqBod.on_sale,
        product_id: shortid.generate(),
        Clasp: `${basic_response.product_id}+clasp`,
        Item_Weight: reqBod.Item_Weight,
        rating_desc: rating,
        images: reqBod.images,
        language: reqBod.language,
        Date_first_available_at_buytoo: reqBod.Date_first_available_at_buytoo,
        Last_bought: reqBod.Last_bought
    })

    let watches = new response_model.watches({
        watch_basic_info: basic_response,
        Display_Type: reqBod.Display_Type,
        Dial_Colour: reqBod.Dial_Colour,
        categories: reqBod.categories,
        Warranty_and_Gurantee: Warranty_and_Gurantee
    })

    let mobiles = new response_model.mobiles({
        mobile_basic_info: basic_response,
        Browse_Type: reqBod.Browse_Type,
        SIM: reqBod.SIM,
        Hybrid_Sim_Slot: reqBod.Hybrid_Sim_Slot,
        Touchscreen: reqBod.Touchscreen,
        OTG_Compatible: reqBod.OTG_Compatible,
        Display_Features: Display_Features,
        Os_and_Processor_Features: Os_and_Processor_Features,
        Memory_and_Storage_Features: Memory_and_Storage_Features,
        Camera_Features: Camera_Features,
        Connectivity_Features: Connectivity_Features,
        Multimedia_Features: Multimedia_Features,
        Battery_and_Power_Features: Battery_and_Power_Features,
        Dimensions: Dimensions,
        Smartphone: reqBod.Smartphone,
        SIM_Size: reqBod.SIM_Size,
        Removable_Battery: reqBod.Removable_Battery,
        Keypad: reqBod.Keypad,
        Graphics_PPI: reqBod.Graphics_PPI,
        Warranty_and_Gurantee: Warranty_and_Gurantee.Warranty_and_Gurantee
    })

    let request_resp = basic_response | watches | mobiles;

    request_resp.save(other.saveFunction(req, res, request_resp._id))



} // function ends

// seeing all product documents

let show_all = (req, res) => {

    let array_res = [response_model.basic, response_model.watches, response_model.mobiles]

   // dealing with err and response of ll product info
    array_res[0].find().select('-__v -_id').lean().exec(
        (err, result) => {
            if (err) {

                // if 1st model fails going for 2nd one
                array_res[1].find().select('-__v -_id').lean().exec(
                    (err1, result1) => {
                        if (err1) {

                            // if 2nd model fails going for 3rd mdel check
                            array_res[2].find().select('-__v -_id').lean().exec(
                                (err2, result2) => {
                                    if (err2) {
                                        logger.captureError("internal server error", 'controller.js : show_all ', 10)
                                        res.send(responses.generate(true, 'Failed to get', 500, null));
                                    } else {
                                        logger.captureInfo('All product infos found', 'controller.js : show_all ', 5);
                                        res.send(responses.generate(false, 'All product infos found', 200, result2));
                                    }
                                }
                            ) //end 3rd


                        } else {
                            logger.captureInfo('All Blogs found', 'blog controller: getAllBlog', 10);
                            res.send(responses.generate(false, 'All blog details found', 200, result1));
                        }
                    }
                ) // end 2nd


            } else {
                logger.captureInfo('All Blogs found', 'blog controller: getAllBlog', 10);
                res.send(responses.generate(false, 'All blog details found', 200, result));
            }
        }
    ) // end 1st

    // if the product info is empty 
    array_res.forEach( model => model.find((err, res) => {
        if (check.isEmpty(res)) {
            console.log('No Blog Found')
            res.send(responses.generate(true, 'No Blog Found', 404, null));
        }
    }))

}