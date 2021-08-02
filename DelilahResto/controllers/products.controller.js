const sequelize = require('../db_connection_data')

const createProduct = async (req, res) => {
  const { productName, productPrice } = req.body;

  let arrayInsertProduct = [`${productName}`, `${productPrice}`];

  try {
    const result = await sequelize.query(
      "INSERT INTO Products( productName , productPrice ) VALUES( ?, ? )",
      { replacements: arrayInsertProduct, type: sequelize.QueryTypes.INSERT }
    );
    res.status(201).json({
      message: "Created"
    });
  } catch (error) {
    console.log(`Invald input. Error: ${error}`);
    res.status(500).json({ error });
  }
};

const getProduct = async (req, res) => {
  try {
    const result = await sequelize.query(`SELECT * from Products p`, {
      type: sequelize.QueryTypes.SELECT
    });
    res.status(200).json({
      message: "Productos existentes",
      msg: true,
      data: result
    });
  } catch (error) {
    console.log(`Invald input. Error: ${error}`);
  }
};

const deleteProduct = async (req, res) => {
  try {
    const result = await sequelize.query(
      `DELETE FROM Products WHERE ProductID = ${req.params.id}`
    );
    res.status(204).json({
      msg: true,
      message: "Deleted product"
    });
  } catch (error) {
    console.log(`Invald input. Error: ${error}`);
  }
};

const updateProduct = async (req, res) => {
  const { productName, productPrice } = req.body;

  try {
    const result = await sequelize.query(
      `UPDATE Products 
        SET productName = '${productName}' , productPrice = '${productPrice}' 
        WHERE ProductID = ${req.params.id}`,
      { type: sequelize.QueryTypes.INSERT }
    );
    res.status(204).json({
      message: "Updated product"
    });
  } catch (error) {
    console.log(`Invald input. Error: ${error}`);
  }
};

const getProductById = async (req, res) => {
  try {
    const result = await sequelize.query(
      `SELECT * FROM Products 
        WHERE ProductID = ${req.params.id}`,
      { type: sequelize.QueryTypes.SELECT }
    );
    res.status(200).json({
      message: "Estado de Orden encontrada:",
      msg: true,
      data: result
    });
  } catch (error) {
    console.log(`error en la inserción ${error}`);
  }
};

exports.createProduct = createProduct;
exports.getProduct = getProduct;
exports.deleteProduct = deleteProduct;
exports.updateProduct = updateProduct;
exports.getProductById = getProductById;
