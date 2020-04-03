const shopModel = require('../models/shop');

const getShops = () => {
  var shops = shopModel.find({});
  console.log(shops);
}

const getShop = () => {
  shopModel.find({
    _id: '123141241421'
  })
}

const createShop = () => {
  shopModel.insert({
    name: 'sdfsdf',
    country: 'sdfsdf',
    img: 'sdfsdf',
    price: 1000
  })
}

const updateShop = () => {

}

const deleteShop = () => {

}











exports.getPoints = async (req, res) => {
	try {
		const userId =
			req.query ? req.query.user_id :
			null;
		if (!userId) throw true;
		var pagination = utils.getMaxIdPagination(req.query);

		var points = await pointRepository.getPoints(userId, pagination);
		pagination.maxId = points[points.length - 1]._id;
		var nextPoints = await pointRepository.getPoints(userId, pagination);
		var point = await userRepository.getPoint(userId);
		var response = {
			point: point,
			items: points,
			pagination: {
				maxId: pagination.maxId,
				limit: pagination.limit,
				remain: nextPoints.length
			}
		};
		utils.handleSuccess(res, response);
	} catch (err) {
		utils.handleError(res, { code: 404, message: 'có lỗi xãy ra' });
	}
};