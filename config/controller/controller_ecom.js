const mongoose = require('mongoose');
const shortid = require('shortid');

// library usage declaration
const responses = require('./../../library/responseLib');
const time = require('./../../library/timeLib');
const check = require('./../../library/checkLib');
const logger = require('./../../library/loggerLib');
const other = require('./../../library/othersLib')
// Importing model_ecom 
let zoomba = mongoose.model('test_6');

const response_model = {
    source: mongoose.model('test_6_basic_info_source'),
    rating: mongoose.model('test_6_basic_info_rating'),
    desc: mongoose.model('test_6_basic_info_desc'),
    Display_Features: mongoose.model('display1'),
    Os_and_Processor_Features: mongoose.model('os_processor1'),
    Memory_and_Storage_Features: mongoose.model('memory1'),
    Connectivity_Features: mongoose.model('connectivity1'),
    Multimedia_Features: mongoose.model('multimedia1'),
    Camera_Features: mongoose.model('camera1'),
    Battery_and_Power_Features: mongoose.model('battery1'),
    Dimensions: mongoose.model('dimensions1'),
    Warranty_and_Gurantee: mongoose.model('warrany_gurantee2'),
    basic: mongoose.model('test_6_basic_info'),
    model_ecom: mongoose.model('model_ecomF')
}


/**
 * function to create document
 */

let create_response = (req, res) => {

    const reqBod = req.body;


    let source = {
        site: 'https://buytoo.in',
        site_section: `https://buytoo.in/${reqBod.type}/${reqBod.name}`,
        section_title: reqBod.section_title,
        country: 'India'
    }
    let rating = {
        mean_rating: reqBod.mean_rating,
        best_rating: reqBod.best_rating,
        worst_rating: reqBod.worst_rating,
        rating_count: reqBod.rating_count,
        reviews_count: reqBod.reviews_count
    }

    let desc = {
        Band_Color: reqBod.Band_Color,
        Band_Material: reqBod.Band_Material,
        Watch_Movement_Type: reqBod.Watch_Movement_Type,
        Watch_Display_Type: reqBod.Watch_Display_Type,
        Suitable: reqBod.Suitable
    }

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
    let product_id = shortid.generate();
    let basic_response = {
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
        product_id: product_id,
        Clasp: `${product_id}+clasp`,
        Item_Weight: reqBod.Item_Weight,
        rating_desc: rating,
        images: reqBod.images,
        language: reqBod.language,
        Date_first_available_at_buytoo: reqBod.Date_first_available_at_buytoo,
        Last_bought: reqBod.Last_bought
    }

    let ecom_resp = new response_model.model_ecom({
        basic_info: basic_response,
        Browse_Type: reqBod.Browse_Type,
        Band_Colour: reqBod.Band_Color,
        Display_Type: reqBod.Display_Type,
        Dial_Colour: reqBod.Dial_Colour,
        categories: reqBod.categories,
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
        Warranty_and_Gurantee: Warranty_and_Gurantee
    })

    // saving the inputs to make tables in collection
    ecom_resp.save(

        // callback for what to show in console 

        other.saveFunction(res, ecom_resp._id))



} // function ends

/**
 * function to see all the blog
 */

let show_all = (req, res) => {


    response_model.model_ecom.find()
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.captureError("internal server error", 'controller.js : show_all ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError('product info can not be found', 'controller.js : show_all', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                logger.captureInfo('All product infos found', 'controller.js : show_all ', 5);
                res.send(responses.generate(false, 'All product info details found', 200, result));
            }
        })


}

/**
 * function to read single product info sorted by Product ID.
 */
let viewByproduct_id = (req, res) => {

    response_model.model_ecom.find()
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.captureError("internal server error", 'controller.js : viewByproduct_id ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError('product info can not be found', 'controller.js : viewByproduct_id', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                if (result.every(obj => obj.basic_info.product_id !== req.params.product_id)) {
                    logger.captureError('product info can not be found', 'controller.js : viewByproduct_id', 10);
                    res.send(responses.generate(true, 'product info can not be found', 404, null));
                } else {
                    let result_indv = result.find(obj => obj.basic_info.product_id === req.params.product_id)
                    logger.captureInfo('All product infos found', 'controller.js : viewByproduct_id ', 5);
                    res.send(responses.generate(false, `${req.params.product_id} product info details found`, 200, result_indv));
                }
            }
        })
}

/**
 * function to read single product info sorted by UUID.
 */
let viewBy_uuid = (req, res) => {

    response_model.model_ecom.find()
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.captureError("internal server error", 'controller.js : viewBy_uuid ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError('product info can not be found', 'controller.js : viewBy_uuid', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                if (result.every(obj => obj.basic_info.uuid !== req.params.uuid)) {
                    logger.captureError('product info can not be found', 'controller.js : viewBy_uuid', 10);
                    res.send(responses.generate(true, 'product info can not be found', 404, null));
                } else {
                    let result_indv = result.find(obj => obj.basic_info.uuid === req.params.uuid)
                    logger.captureInfo('All product infos found', 'controller.js : viewBy_uuid ', 5);
                    res.send(responses.generate(false, `${req.params.uuid} uuid product info details found`, 200, result_indv));
                }
            }
        })
}
module.exports = {
    show_all: show_all,
    create_response: create_response,
    viewByproduct_id: viewByproduct_id,
    viewBy_uuid: viewBy_uuid
}