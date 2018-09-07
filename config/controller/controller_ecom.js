const mongoose = require('mongoose');
const shortid = require('shortid');

// library usage declaration
const responses = require('./../../library/responseLib');
const time = require('./../../library/timeLib');
const check = require('./../../library/checkLib');
const logger = require('./../../library/loggerLib');
const other = require('./../../library/othersLib');
const user_need = require('./../../library/userLib')
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
    basic: mongoose.model('test_6_basic_info1'),
    bought_by: mongoose.model('Bought_by1'),
    model_ecom: mongoose.model('model_ecomFinal1')
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
    let Network_Type = (!check.isEmpty(reqBod.Network_Type)) ? reqBod.Network_Type.split(',') : ['default']

    let Supported_Networks = (!check.isEmpty(reqBod.Supported_Networks)) ? reqBod.Supported_Networks.split(',') : ['default']

    let Connectivity_Features = new response_model.Connectivity_Features({
        Network_Type: Network_Type,
        Supported_Networks: Supported_Networks,
        threeG: reqBod.threeG,
        Bluetooth_Support: reqBod.Bluetooth_Support,
        Bluetooth_Version: reqBod.Bluetooth_Support,
        Wi_Fi: reqBod.Wi_Fi,
        Audio_Jack: reqBod.Audio_Jack
    })
    let Audio_Formats = (!check.isEmpty(reqBod.Audio_Formats)) ? reqBod.Audio_Formats.split(',') : ['default']
    let Video_Formats = (!check.isEmpty(reqBod.Video_Formats)) ? reqBod.Video_Formats.split(',') : ['default']

    let Multimedia_Features = new response_model.Multimedia_Features({
        FM_Radio: reqBod.FM_Radio,
        FM_Radio_Recording: reqBod.FM_Radio_Recording,
        Audio_Formats: Audio_Formats,
        Video_Formats: Video_Formats
    })

    let Primary_Camera_Features = (!check.isEmpty(reqBod.Primary_Camera_Features)) ? reqBod.Primary_Camera_Features.split(',') : ['default']

    let Camera_Features = new response_model.Camera_Features({
        Primary_Camera_Available: reqBod.Primary_Camera_Available,
        Primary_Camera: reqBod.Primary_Camera,
        Primary_Camera_Features: Primary_Camera_Features,
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
    let users = (!check.isEmpty(reqBod.users)) ? reqBod.users.split(',') : []
    let number_of_times_strings = (!check.isEmpty(reqBod.number_of_times)) ? reqBod.number_of_times.split(',') : []
    let number_of_times = number_of_times_strings.map(obj => Number(obj))
    let Bought_by = new response_model.bought_by({
        users: users,
        number_of_times: number_of_times
    })
    let Warranty_and_Gurantee = new response_model.Warranty_and_Gurantee({
        Warranty_Summary: reqBod.Warranty_Summary,
        Gurantee_Summary: reqBod.Gurantee_Summary
    })
    let product_id = shortid.generate();
    let images = (!check.isEmpty(reqBod.images)) ? reqBod.images.split(',') : ['default']
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
        product_id: product_id,
        Clasp: `${product_id}+clasp`,
        Item_Weight: reqBod.Item_Weight,
        rating_desc: rating,
        images: images,
        language: reqBod.language,
        Date_first_available_at_buytoo: reqBod.Date_first_available_at_buytoo,
        Last_bought: reqBod.Last_bought
    })


    let sum = () => {
        var init = 0
        for (const value of number_of_times) {
            init = init + value
        }
        return init
    }
    let Bought_amount = sum()

    let categories = (!check.isEmpty(reqBod.categories)) ? reqBod.categories.split(',') : ['default']
    let ecom_resp = new response_model.model_ecom({
        basic_info: basic_response,
        Browse_Type: reqBod.Browse_Type,
        Band_Colour: reqBod.Band_Color,
        Display_Type: reqBod.Display_Type,
        Dial_Colour: reqBod.Dial_Colour,
        categories: categories,
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
        Added_to_cart: reqBod.Added_to_cart,
        Bought_amount: Bought_amount,
        Bought_by: Bought_by,
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
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
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
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
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
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
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

/**
 * function to find product document by category.
 */
let viewByCategory = (req, res) => {
    let categories1 = (!check.isEmpty(req.params.categories)) ? req.params.categories.split('_') : []

    /*response_model.model_ecom.find({
            "categories": [...categories1]
        }).select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.captureError("internal server error", 'controller.js : viewByCategory ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : viewByCategory', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                logger.captureInfo("products' infos has been found", 'controller.js : viewByCategory', 5);
                res.send(responses.generate(false, `All product info details of ${categories1}  found`, 200, result));
            }
        })*/


    response_model.model_ecom.find()
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.captureError("internal server error", 'controller.js : viewByCategory ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : viewByCategory', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                if (result.every(obj => {
                        let set1 = new Set([...obj.categories, ...categories1])
                        return obj.categories.length !== [...set1].length
                    })) {

                    logger.captureError(` product info can not be found`, 'controller.js : viewByCategory', 10);
                    res.send(responses.generate(true, 'product info can not be found', 404, null));
                } else {
                    let result_indv = result.filter(obj => {
                        let set2 = new Set([...obj.categories, ...categories1])
                        return obj.categories.length === [...set2].length
                    })
                    logger.captureInfo("products' infos has been found", 'controller.js : viewByCategory', 5);
                    res.send(responses.generate(false, `All product info details of ${categories1}  found`, 200, result_indv));
                }
            }
        })
}

/**
 * function to edit product info  by admin.
 */
let editProduct_info = (req, res) => {

    let options = req.body;

    // to update the subdocs and sub-sub-docs use the object key sequence (eg: to update the price => put basic_info.price in request body)

    console.log(options);
    response_model.model_ecom.update({
        'basic_info.product_id': req.params.product_id
    }, options, {
        multi: true
    }).exec((err, result) => {

        if (err) {
            logger.captureError("internal server error", 'controller.js : editProduct_info ', 10)
            res.send(responses.generate(true, 'Failed to edit the doc', 500, null));
        } else if (check.isEmpty(result)) {
            logger.captureError(` product info can not be found`, 'controller.js : editProduct_info', 10);
            res.send(responses.generate(true, 'product info can not be found', 404, null));
        } else {
            logger.captureInfo("products' infos has been updated", 'controller.js : editProduct_info', 5);
            res.send(responses.generate(false, `${req.params.product_id} id product info doc has been updated`, 200, result));

        }
    })
}

/**
 * function to delete the product info.
 */
let deleteProduct_info = (req, res) => {
    response_model.model_ecom.remove({
        'basic_info.product_id': req.params.product_id
    }, (err, result) => {
        if (err) {
            logger.captureError("internal server error", 'controller.js : deleteProduct_info ', 10)
            res.send(responses.generate(true, 'Failed to delete the doc', 500, null));
        } else if (check.isEmpty(result)) {
            logger.captureError(` product info can not be found`, 'controller.js : deleteProduct_info', 10);
            res.send(responses.generate(true, 'product info can not be found', 404, null));
        } else {
            logger.captureInfo("products' infos has been deleted", 'controller.js : deleteProduct_info', 5);
            res.send(responses.generate(false, `${req.params.product_id} id product info doc has been deleted`, 200, result));

        }
    })
}

/**
 * function to delete the product info of same categories.
 */
let deletePrduct_info_byCategory = (req, res) => {
    let categories1 = (!check.isEmpty(req.params.categories)) ? req.params.categories.split('_') : [];
    let prod_id_array = []
    response_model.model_ecom.find()
        .exec((err, result) => {

            if (err) {
                logger.captureError("internal server error", 'controller.js : viewByCategory ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : viewByCategory', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                if (result.every(obj => {
                        let set1 = new Set([...obj.categories, ...categories1])
                        return obj.categories.length !== [...set1].length
                    })) {
                    logger.captureError(` product info can not be found`, 'controller.js : deletePrduct_info_byCategory', 10);
                    res.send(responses.generate(true, 'product info can not be found', 404, null));
                } else {
                    let result_indv = result.filter(obj => {
                        let set2 = new Set([...obj.categories, ...categories1])
                        return obj.categories.length === [...set2].length
                    })
                    logger.captureInfo("products' infos has been found", 'controller.js : deletePrduct_info_byCategory', 5);
                    result_indv.forEach(obj => {

                        response_model.model_ecom.remove({
                            'basic_info.product_id': obj.basic_info.product_id
                        }, (err, result) => {
                            if (err) {
                                logger.captureError("internal server error", 'controller.js : deletePrduct_info_byCategory ', 10)
                                res.send(responses.generate(true, 'Failed to delete the doc', 500, null));
                            } else if (check.isEmpty(result)) {
                                logger.captureError(` product info can not be found`, 'controller.js : deletePrduct_info_byCategory', 10);
                                res.send(responses.generate(true, 'product info can not be found', 404, null));
                            } else {
                                logger.captureInfo("products' infos has been deleted", 'controller.js : deletePrduct_info_byCategory', 5);

                                prod_id_array.push(obj.basic_info.product_id);
                                res.send(responses.generate(false, `(${prod_id_array}) products info doc has been deleted`, 200, result));

                            }
                        })



                    });
                }
            }
        })
}

/**
 * function to implement the product's offer price.
 */
let implementing_offer_price = (req, res) => {
    response_model.model_ecom.update({
            'basic_info.product_id': req.params.product_id
        }, {
            'basic_info.offer_price': req.body.offer_price,
            'basic_info.on_sale': 'yes'
        })
        .exec((err, result) => {
            if (err) {
                logger.captureError("internal server error", 'controller.js : implementing_offer_price ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : implementing_offer_price', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                logger.captureInfo("products' infos has been found", 'controller.js : implementing_offer_price', 5);
                res.send(responses.generate(false, `offer price of ${req.params.product_id} has been updated`, 200, result));
            }
        })
}

/**
 * function to add products to cart.
 */
let addremoveProduct_to_cart = (req, res) => {
    response_model.model_ecom.update({
            'basic_info.product_id': req.params.product_id
        }, {
            'Added_to_cart': req.body.Added_to_cart
        })
        .exec((err, result) => {
            if (err) {
                logger.captureError("internal server error", 'controller.js : addremoveProduct_to_cart ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : addremoveProduct_to_cart', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                logger.captureInfo("products' infos has been found", 'controller.js : addremoveProduct_to_cart', 5);
                res.send(responses.generate(false, `product ${req.params.product_id} has been added to cart `, 200, result));
            }
        })
}

/**
 * function to see  products added to cart or not added to cart.
 */
let findproductsadded_to_cart_or_not_added = (req, res) => {
    response_model.model_ecom.find({
            'Added_to_cart': req.params.Added_to_cart
        })
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
        .lean()
        .exec((err, result) => {
            if (err) {
                logger.captureError("internal server error", 'controller.js : findproductsadded_to_cart_or_not_added ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : findproductsadded_to_cart_or_not_added', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                logger.captureInfo("products' infos has been found", 'controller.js : findproductsadded_to_cart_or_not_added', 5);
                res.send(responses.generate(false, `products infos has been found `, 200, result));
            }
        })
}

/**
 * function to set user and amount they have bought.
 */
let addUser_amout_bought = (req, res) => {
    let reqBod = req.body
    // finding certain product doc to use the user related sub-doc infos
    response_model.model_ecom.findOne({
            'basic_info.product_id': req.params.product_id
        })
        .exec((err, result) => {
            if (err) {
                logger.captureError("internal server error", 'controller.js : addUser_amout_bought ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : addUser_amout_bought', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                logger.captureInfo("products' infos has been found", 'controller.js : addUser_amout_bought', 5);

                // making array out of request body inputs of various field
                let users = (!check.isEmpty(reqBod.users)) ? reqBod.users.split(',') : []
                let number_of_times_strings = (!check.isEmpty(reqBod.number_of_times)) ? reqBod.number_of_times.split(',') : []
                let number_of_times = number_of_times_strings.map(obj => Number(obj))
                
                // defining sum(x) function
                let sum = (x) => {
                    var init = 0
                    for (const value of x) {
                        init = init + value
                    }
                    return init
                }

                // if user field has not being assigned 
                if (result.Bought_by.users.length === 0) {
                    //total amount bought
                    let Bought_amount = sum(number_of_times)
                    response_model.model_ecom.update({
                        'basic_info.product_id': req.params.product_id
                    }, {
                        'Bought_by.users': users,
                        'Bought_by.number_of_times': number_of_times,
                        'Bought_amount': Bought_amount
                    }, {
                        multi: true
                    }).exec((err, result) => {

                        if (err) {
                            logger.captureError("internal server error", 'controller.js : addUser_amout_bought ', 10)
                            res.send(responses.generate(true, 'Failed to edit the doc', 500, null));
                        } else if (check.isEmpty(result)) {
                            logger.captureError(` product info can not be found`, 'controller.js : addUser_amout_bought', 10);
                            res.send(responses.generate(true, 'product info can not be found', 404, null));
                        } else {
                            logger.captureInfo("products' infos has been updated", 'controller.js : addUser_amout_bought', 5);
                            res.send(responses.generate(false, `${req.params.product_id} id product info doc has been updated`, 200, result));

                        }
                    })




                } // end of the condition
                else { // if user field has been assigned 

                    // to delete duplicated element while adding to user field
                    let set1 = new Set([...result.Bought_by.users, ...users])
                    let users_updated = [...set1];

                    // updating how many times product has been bought by an individual user
                    let number_of_times_updated = users_updated.map((obj, i) =>
                       {
                           if(result.Bought_by.users.indexOf(obj) == -1){
                               return number_of_times[users.indexOf(obj)]
                           }
                           else if(users.indexOf(obj) !== -1){
                               return result.Bought_by.number_of_times[i] + number_of_times[users.indexOf(obj)]
                           } else {
                               return 10
                           }
                       })
                   
                        // total amount bought 
                        let Bought_amount = sum(number_of_times_updated)
                        // updating the doc with new infos 
                    response_model.model_ecom.update({
                        'basic_info.product_id': req.params.product_id
                    }, {
                        'Bought_by.users': users_updated,
                        'Bought_by.number_of_times': number_of_times_updated,
                        'Bought_amount': Bought_amount
                    }, {
                        multi: true
                    }).exec((err, result) => {

                        if (err) {
                            logger.captureError("internal server error", 'controller.js : editProduct_info ', 10)
                            res.send(responses.generate(true, 'Failed to edit the doc', 500, null));
                        } else if (check.isEmpty(result)) {
                            logger.captureError(` product info can not be found`, 'controller.js : editProduct_info', 10);
                            res.send(responses.generate(true, 'product info can not be found', 404, null));
                        } else {
                            logger.captureInfo("products' infos has been updated", 'controller.js : editProduct_info', 5);
                            res.send(responses.generate(false, `${req.params.product_id} id product info doc has been updated`, 200, result));

                        }
                    }) 

                }



            }
        })
}


/**
 * function to find product which has been bought by a certain user
 */
let viewByusers_bought_by = (req, res) => {
    let users = (!check.isEmpty(req.params.users)) ? req.params.users.split('_') : []
    response_model.model_ecom.find()
        .select('-__v -_id -basic_info._id -basic_info.source._id -basic_info.description._id -basic_info.rating_desc._id -Display_Features._id -Os_and_Processor_Features._id -Memory_and_Storage_Features._id -Camera_Features._id -Connectivity_Features._id -Multimedia_Features._id -Battery_and_Power_Features._id -Dimensions._id -Warranty_and_Gurantee._id -Bought_by._id -Bought_amount._id')
        .lean()
        .exec((err, result) => {

            if (err) {
                logger.captureError("internal server error", 'controller.js : viewByusers_bought_by ', 10)
                res.send(responses.generate(true, 'Failed to get', 500, null));
            } else if (check.isEmpty(result)) {
                logger.captureError(` product info can not be found`, 'controller.js : viewByusers_bought_by', 10);
                res.send(responses.generate(true, 'product info can not be found', 404, null));
            } else {
                if (result.every(obj => {
                        let set1 = new Set([...obj.Bought_by.users, ...users])
                        return obj.Bought_by.users.length !== [...set1].length
                    })) {

                    logger.captureError(` product info can not be found`, 'controller.js : viewByusers_bought_by', 10);
                    res.send(responses.generate(true, 'product info can not be found', 404, null));
                } else {
                    let result_indv = result.filter(obj => {
                        let set1 = new Set([...obj.Bought_by.users, ...users])
                        return obj.Bought_by.users.length === [...set1].length
                    })
                    logger.captureInfo("products' infos has been found", 'controller.js : viewByusers_bought_by', 5);
                    res.send(responses.generate(false, `All product info details bought by ${users}  found`, 200, result_indv));
                }
            }
        })
}
module.exports = {
    show_all: show_all,
    create_response: create_response,
    viewByproduct_id: viewByproduct_id,
    viewBy_uuid: viewBy_uuid,
    viewByCategory: viewByCategory,
    editProduct_info: editProduct_info,
    deleteProduct_info: deleteProduct_info,
    deletePrduct_info_byCategory: deletePrduct_info_byCategory,
    implementing_offer_price: implementing_offer_price,
    addremoveProduct_to_cart: addremoveProduct_to_cart,
    findproductsadded_to_cart_or_not_added: findproductsadded_to_cart_or_not_added,
    addUser_amout_bought: addUser_amout_bought,
    viewByusers_bought_by: viewByusers_bought_by
}