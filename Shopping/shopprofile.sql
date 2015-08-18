/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50540
Source Host           : 127.0.0.1:3306
Source Database       : shopprofile

Target Server Type    : MYSQL
Target Server Version : 50540
File Encoding         : 65001

Date: 2015-08-15 20:46:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `category`
-- ----------------------------
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category` (
  `category_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_name` longtext,
  `description` longtext,
  `picture` longtext,
  `active` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`category_key`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of category
-- ----------------------------
INSERT INTO `category` VALUES ('1', 'International', null, null, null);
INSERT INTO `category` VALUES ('2', 'Grocery & Staples', '', '', null);
INSERT INTO `category` VALUES ('3', 'Fruits & Vegetables', null, null, null);
INSERT INTO `category` VALUES ('4', 'Dairy Products', null, null, null);
INSERT INTO `category` VALUES ('5', 'Beverages & Syrups', null, null, null);
INSERT INTO `category` VALUES ('6', 'Food Matters', null, null, null);
INSERT INTO `category` VALUES ('7', 'Personal Care', null, null, null);
INSERT INTO `category` VALUES ('8', 'Fresh & Frozen', null, null, null);
INSERT INTO `category` VALUES ('9', 'Desserts & Confectionery', null, null, null);
INSERT INTO `category` VALUES ('10', 'Breakfast & Health Food', null, null, null);
INSERT INTO `category` VALUES ('11', 'Bottles, Cans & Packets', null, null, null);
INSERT INTO `category` VALUES ('12', 'Condiments & Sauces', null, null, null);
INSERT INTO `category` VALUES ('13', 'Baby Care', null, null, null);
INSERT INTO `category` VALUES ('14', 'Health Care', null, null, null);
INSERT INTO `category` VALUES ('15', 'Household Supplies', null, null, null);
INSERT INTO `category` VALUES ('16', 'Home & Kitchen Ware', null, null, null);
INSERT INTO `category` VALUES ('17', 'Appliances', null, null, null);
INSERT INTO `category` VALUES ('18', 'Banya\'s Bakery & Deli', null, null, null);
INSERT INTO `category` VALUES ('19', 'Organic Foods', null, null, null);
INSERT INTO `category` VALUES ('20', 'Stationery', null, null, null);

-- ----------------------------
-- Table structure for `customers`
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `customer_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `class` varchar(255) DEFAULT NULL,
  `room` varchar(255) DEFAULT NULL,
  `building` varchar(255) DEFAULT NULL,
  `address1` varchar(255) DEFAULT NULL,
  `address2` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `postal_code` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `phone` bigint(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `voice_mail` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `credit_card` varchar(255) DEFAULT NULL,
  `credit_cardType_id` bigint(20) DEFAULT NULL,
  `card_exp_mo` int(11) DEFAULT NULL,
  `card_exp_yr` int(11) DEFAULT NULL,
  `billing_address` varchar(255) DEFAULT NULL,
  `billing_city` varchar(255) DEFAULT NULL,
  `billing_region` varchar(255) DEFAULT NULL,
  `billing_postal_code` bigint(20) DEFAULT NULL,
  `billing_country` varchar(255) DEFAULT NULL,
  `ship_address` varchar(255) DEFAULT NULL,
  `ship_city` varchar(255) DEFAULT NULL,
  `ship_region` varchar(255) DEFAULT NULL,
  `ship_postal_code` bigint(20) DEFAULT NULL,
  `ship_country` varchar(255) DEFAULT NULL,
  `date_entered` date DEFAULT NULL,
  `otp` varchar(255) DEFAULT NULL,
  `active` int(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`customer_key`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of customers
-- ----------------------------
INSERT INTO `customers` VALUES ('6', null, null, null, null, null, null, null, null, null, null, null, '2222', 'sharma.sunil.nov@gmail.com', null, '123', null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, 'xYPfpseP', '1');

-- ----------------------------
-- Table structure for `orderdetails`
-- ----------------------------
DROP TABLE IF EXISTS `orderdetails`;
CREATE TABLE `orderdetails` (
  `order_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_ref` bigint(20) DEFAULT NULL,
  `price` double DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  `discount` int(11) DEFAULT NULL,
  `total` double DEFAULT NULL,
  `idsku` varchar(255) DEFAULT NULL,
  `size` int(11) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `fulfilled` longtext,
  `ship_date` date DEFAULT NULL,
  `order_detail_id` bigint(20) DEFAULT NULL,
  `bill_date` date DEFAULT NULL,
  PRIMARY KEY (`order_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of orderdetails
-- ----------------------------

-- ----------------------------
-- Table structure for `orders`
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `order_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `customer_ref` bigint(20) DEFAULT NULL,
  `order_number` varchar(255) DEFAULT NULL,
  `payment_ref` bigint(20) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `ship_date` date DEFAULT NULL,
  `required_date` date DEFAULT NULL,
  `shipper_ref` bigint(20) DEFAULT NULL,
  `freight` varchar(255) DEFAULT NULL,
  `sales_tax` bigint(20) DEFAULT NULL,
  `timestamp` datetime DEFAULT NULL,
  `transact_status` varchar(255) DEFAULT NULL,
  `err_loc` varchar(255) DEFAULT NULL,
  `err_msg` varchar(255) DEFAULT NULL,
  `fulfilled` varchar(255) DEFAULT NULL,
  `deleted` varchar(255) DEFAULT NULL,
  `paid` varchar(255) DEFAULT NULL,
  `payment_date` date DEFAULT NULL,
  PRIMARY KEY (`order_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of orders
-- ----------------------------

-- ----------------------------
-- Table structure for `payment`
-- ----------------------------
DROP TABLE IF EXISTS `payment`;
CREATE TABLE `payment` (
  `payment_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `payment_type` longtext,
  `allowed` int(11) DEFAULT NULL,
  PRIMARY KEY (`payment_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of payment
-- ----------------------------

-- ----------------------------
-- Table structure for `products`
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products` (
  `product_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `product_name` longtext,
  `category_ref` bigint(20) DEFAULT NULL,
  `sub_category_ref` bigint(20) DEFAULT NULL,
  `unite_price` float DEFAULT NULL,
  `picture` longtext,
  `sku` bigint(20) DEFAULT NULL,
  `idsku` bigint(20) DEFAULT NULL,
  `vendor_product_ref` bigint(20) DEFAULT NULL,
  `product_description` longtext,
  `supplier_ref` bigint(20) DEFAULT NULL,
  `quantity_per_unit` bigint(20) DEFAULT NULL,
  `msrp` bigint(20) DEFAULT NULL,
  `available_colors` longtext,
  `size` bigint(20) DEFAULT NULL,
  `color` longtext,
  `discount` float DEFAULT NULL,
  `unit_weight` float DEFAULT NULL,
  `units_in_stock` bigint(20) DEFAULT NULL,
  `units_on_order` bigint(20) DEFAULT NULL,
  `reorder_level` longtext,
  `product_available` longtext,
  `discount_available` longtext,
  `current_order` longtext,
  `ranking` longtext,
  `note` longtext,
  PRIMARY KEY (`product_key`)
) ENGINE=InnoDB AUTO_INCREMENT=271 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES ('1', 'Vaseline - Aloe Lotion', '7', '2', '80', 'Images/Personal Care/Creams And Lotions/0E0E43A3-3479-4318-8DAE-D6BCB7F0ED1F.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('2', 'Vaseline - Total Moisturizing Lotion', '7', '2', '57', 'Images/Personal Care/Creams And Lotions/6BB4CA38-004F-482F-83AD-9B40C9DC503B.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('3', 'Vaseline - Cocoa Glow Lotion', '7', '2', '60', 'Images/Personal Care/Creams And Lotions/54F79ABC-33E6-4113-8AF0-D277035FBC6E.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('4', 'Vaseline - Total Moisturizing Lotion', '7', '2', '185', 'Images/Personal Care/Creams And Lotions/1278Capture314.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('5', 'Vaseline - Healthy White Triple Lightening Sp...', '7', '2', '70', 'Images/Personal Care/Creams And Lotions/1604Capture888.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('6', 'Emami - Fair & Handsome', '7', '2', '70', 'Images/Personal Care/Creams And Lotions/2120Vicco-Turmeric-Skin-Cream.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('7', 'Vaseline - Healthy White Lotion', '7', '2', '70', 'Images/Personal Care/Creams And Lotions/2148safe%20sun.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('8', 'Fair & Lovely - Ayurvedic Cream', '7', '2', '171', 'Images/Personal Care/Creams And Lotions/2253Capture896.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('9', 'Fair & Lovely - Max Fairness For Men', '7', '2', '155', 'Images/Personal Care/Creams And Lotions/3032Capture309.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('10', 'Vicco - Turmeric Skin Cream', '7', '2', '350', 'Images/Personal Care/Creams And Lotions/3812Capture890.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('11', 'Vicco - Narayani Cream', '7', '2', '315', 'Images/Personal Care/Creams And Lotions/4974matte%20loookkkkkkkkkkk.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('12', 'Vlcc - Matte Look Sun Screen Lotion Spf 30', '7', '2', '350', 'Images/Personal Care/Creams And Lotions/5670Capture894.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('13', 'Vlcc - Silver Single Facial Kit', '7', '2', '79', 'Images/Personal Care/Creams And Lotions/5676.js', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('14', 'Vlcc - Sweat Free Sun Block Lotion Spf 40', '7', '2', '30', 'Images/Personal Care/Creams And Lotions/6405body%20milk.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('15', 'Vaseline - Aloevera Fresh Body Lotion', '7', '2', '20', 'Images/Personal Care/Creams And Lotions/6854d.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('16', 'Vaseline - Healthy White Complete 10', '7', '2', '99', 'Images/Personal Care/Creams And Lotions/7092Capture310.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('17', 'Santoor - Body Lotion Intensive Moisturizer', '7', '2', '400', 'Images/Personal Care/Creams And Lotions/0E0E43A3-3479-4318-8DAE-D6BCB7F0ED1F.jpg', '8', '45', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('18', 'Biotique - Skincare Oil', '7', '2', '100', 'Images/Personal Care/Creams And Lotions/6BB4CA38-004F-482F-83AD-9B40C9DC503B.jpg', '8', '41', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('19', 'Biotique - Clove Anti Blemish Face Pack', '7', '2', '150', 'Images/Personal Care/Creams And Lotions/54F79ABC-33E6-4113-8AF0-D277035FBC6E.JPG', '8', '164', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('20', 'Garnier - Wrinkle Lift Cream', '7', '2', '90', 'Images/Personal Care/Creams And Lotions/1278Capture314.JPG', '8', '41', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('21', 'Garnier - Fair Miracle Cream', '7', '2', '45', 'Images/Personal Care/Creams And Lotions/1604Capture888.JPG', '8', '185', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('22', 'Olay - 3in1 Natural White Fairness Cream', '7', '2', '163', 'Images/Personal Care/Creams And Lotions/2120Vicco-Turmeric-Skin-Cream.jpg', '8', '60', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('23', 'Veet - Natural Normal Skin', '7', '2', '60', 'Images/Personal Care/Creams And Lotions/2148safe%20sun.jpg', '8', '60', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('24', 'Vlcc - Skin White Day Cream Spf 25', '7', '2', '304.2', 'Images/Personal Care/Creams And Lotions/2253Capture896.JPG', '8', '60', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('25', 'Lakme - Radiance Fairness Day Cream', '7', '2', '338', 'Images/Personal Care/Creams And Lotions/3032Capture309.JPG', '8', '24', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('26', 'Fair & Lovely - Multi Vitamin Pum Spf 15', '7', '2', '175', 'Images/Personal Care/Creams And Lotions/3812Capture890.JPG', '8', '36', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('27', 'Joy - Skin Fruits Active Fruit Moisturizing M...', '7', '2', '95', 'Images/Personal Care/Creams And Lotions/4974matte%20loookkkkkkkkkkk.JPG', '8', '36', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('28', 'L\'Oreal Paris - Perfect Skin 30+ Day Cream', '7', '2', '176', 'Images/Personal Care/Creams And Lotions/5670Capture894.JPG', '8', '158', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('29', 'L\'Oreal Paris - Perfect Skin 20+ Day Cream', '7', '2', '30', 'Images/Personal Care/Creams And Lotions/5676.js', '8', '168', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('30', 'Neutrogena - Ultra Sheer Body Mist', '7', '2', '30', 'Images/Personal Care/Creams And Lotions/6405body%20milk.jpg', '8', '160', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('31', 'Olay Regenerist - Wrinkle Revolution Complex', '7', '2', '30', 'Images/Personal Care/Creams And Lotions/6854d.jpg', '8', '69', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('32', 'Vlcc - Anti Tan Facial Kit', '7', '2', '30', 'Images/Personal Care/Creams And Lotions/7092Capture310.JPG', '8', '185', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('33', 'Vlcc - Papaya Fruit Facial Kit', '7', '2', '198', 'Images/Personal Care/Creams And Lotions/0E0E43A3-3479-4318-8DAE-D6BCB7F0ED1F.jpg', '8', '680', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('34', 'Garnier - Men Acno Whitening Cream', '7', '2', '140', 'Images/Personal Care/Creams And Lotions/6BB4CA38-004F-482F-83AD-9B40C9DC503B.jpg', '8', '170', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('35', 'Nivea - Argan Nourish Body Lotion', '7', '2', '135', 'Images/Personal Care/Creams And Lotions/54F79ABC-33E6-4113-8AF0-D277035FBC6E.JPG', '8', '38', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('36', 'Nivea - Cocoa Nourish Body Lotion', '7', '2', '199', 'Images/Personal Care/Creams And Lotions/1278Capture314.JPG', '8', '30', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('37', 'Nivea - Q10 Firming Lotion', '7', '2', '155', 'Images/Personal Care/Creams And Lotions/1604Capture888.JPG', '8', '180', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('38', 'Lakme - Complexion Care Cream Bronze', '7', '2', '68.4', 'Images/Personal Care/Creams And Lotions/2120Vicco-Turmeric-Skin-Cream.jpg', '8', '40', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('39', 'Lakme - Youth Infinity Day Creme', '7', '2', '72', 'Images/Personal Care/Creams And Lotions/2148safe%20sun.jpg', '8', '32', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('40', 'Veet - Hair Removal Cream For Dry Skin', '7', '1', '80', 'Images/Personal Care/Creams And Lotions/2253Capture896.JPG', '8', '170', null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('41', 'Fem - Gold Bleach', '7', '1', '80', 'Images/Personal Care/Creams And Lotions/3032Capture309.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('42', 'Bigen - Speedy Brownish Black', '7', '1', '57', 'Images/Personal Care/Creams And Lotions/3812Capture890.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('43', 'Veet - Hibiscus Sensitive Skin', '7', '1', '60', 'Images/Personal Care/Creams And Lotions/4974matte%20loookkkkkkkkkkk.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('44', 'Veet - Hibiscus Supreme Essence', '7', '1', '185', 'Images/Personal Care/Creams And Lotions/5670Capture894.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('45', 'Vlcc - Instant Glow Facial Kit', '7', '1', '70', 'Images/Personal Care/Creams And Lotions/5676.js', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('46', 'Vlcc - Gold Bleach', '7', '1', '70', 'Images/Personal Care/Creams And Lotions/6405body%20milk.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('47', 'Vlcc - Shape Up Slimming Oil', '7', '1', '70', 'Images/Personal Care/Creams And Lotions/6854d.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('48', 'Vlcc - Pearl Fairness Facial Kit', '7', '1', '171', 'Images/Personal Care/Creams And Lotions/7092Capture310.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('49', 'Vlcc - Diamond Facial Kit Single', '7', '1', '155', 'Images/Personal Care/Cosmetics/24321n.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('50', 'Vlcc - Gold Facial Kit Single', '7', '1', '350', 'Images/Personal Care/Cosmetics/1001001a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('51', 'Godrej - Hair Colour Original Black Sachet', '7', '1', '315', 'Images/Personal Care/Cosmetics/1001002a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('52', 'Bigen - Natural Hair Color N4 Brown', '7', '1', '110', 'Images/Personal Care/Cosmetics/1001004a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('53', 'Vlcc - Daily Protect Lip Balm Strawberry', '7', '1', '158', 'Images/Personal Care/Cosmetics/1001005a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('54', 'Vlcc - Pedicure & Manicure Kit', '7', '1', '86', 'Images/Personal Care/Cosmetics/1001006a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('55', 'Garnier - Color Natural No 5 Light Brown', '7', '1', '52', 'Images/Personal Care/Cosmetics/1001008a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('56', 'L\'Oreal Paris - Casting Cream Gloss Black Che...', '7', '1', '166', 'Images/Personal Care/Cosmetics/1001009a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('57', 'Garnier Men - Colour Naturals Hair Colour Bur...', '7', '1', '165', 'Images/Personal Care/Cosmetics/1001013a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('58', 'Bigen Mens - Beard Colour Brown Black No.10', '7', '1', '80', 'Images/Personal Care/Cosmetics/1001014a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('59', 'Revlon - Colorsilk Deep Burgundy 3db', '7', '1', '430', 'Images/Personal Care/Cosmetics/1001015a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('60', 'Revlon - Colorsilk Dark Brown 3n', '7', '1', '329', 'Images/Personal Care/Cosmetics/1001016a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('61', 'Revlon - Color & Cream Natural Black 1n', '7', '1', '72', 'Images/Personal Care/Cosmetics/1001023a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('62', 'Revlon - Color & Cream Darkest Brown 3n', '7', '1', '80', 'Images/Personal Care/Cosmetics/1001044a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('63', 'Revlon - Color & Cream Black Brown 2n', '7', '1', '60', 'Images/Personal Care/Cosmetics/1001046b_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('64', 'Revlon - Top Speed - Natural Black 1', '7', '1', '120', 'Images/Personal Care/Cosmetics/1001047a_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('65', 'Revlon - Top Speed - Brown Black 2', '7', '1', '275', 'Images/Personal Care/Cosmetics/1001052a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('66', 'Bigen Mens - Speedy Natural Black N101', '7', '1', '849', 'Images/Personal Care/Cosmetics/1001054a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('67', 'Bigen Easy Natural - Black Hair Color N1', '7', '1', '75', 'Images/Personal Care/Cosmetics/1001055a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('68', 'Bigen Easy Natural - Brown Hair Color N3', '7', '1', '135', 'Images/Personal Care/Cosmetics/1001064a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('69', 'Bigen - Black Brown N20 Hair Color Powder', '7', '1', '100', 'Images/Personal Care/Cosmetics/1001065a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('70', 'Bigen - Oriental Black N10 Hair Color Powder', '7', '1', '129', 'Images/Personal Care/Cosmetics/1001066a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('71', 'Nupur - Mehendi', '7', '1', '430', 'Images/Personal Care/Cosmetics/1001101a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('72', 'Fem - Oxy Life Bleach', '7', '1', '200', 'Images/Personal Care/Cosmetics/1001102a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('73', 'Garnier - Colour Naturals Hair Colour Black N...', '7', '1', '100', 'Images/Personal Care/Cosmetics/1001107a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('74', 'Garnier - Colour Naturals Hair Colour Darkest...', '7', '1', '100', 'Images/Personal Care/Cosmetics/1001120a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('75', 'Garnier - Colour Naturals Hair Colour Burgund...', '7', '1', '50', 'Images/Personal Care/Cosmetics/1001123a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('76', 'Garnier - Colour Naturals Hair Colour Brown N...', '7', '1', '75', 'Images/Personal Care/Cosmetics/1001126a_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('77', 'Maybelline - Colossal Kajal', '7', '1', '70', 'Images/Personal Care/Cosmetics/1001127a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('82', 'L\'Oreal Paris - Casting Cream Gloss Ebony Bla...', '7', '1', '269', 'Images/Personal Care/Deo Perfumes/2EC5CF6D-4F7C-43E1-B297-E5814CCC2DEC.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('83', 'L\'Oreal Paris - Casting Cream Gloss Dark Brow...', '7', '1', '229', 'Images/Personal Care/Deo Perfumes/1449Capture326.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('84', 'Adidas - Team Force Deo', '7', '3', '269', 'Images/Personal Care/Deo Perfumes/2EC5CF6D-4F7C-43E1-B297-E5814CCC2DEC.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('85', 'Nycil - Talcum Cool Herbal Powder', '7', '3', '225', 'Images/Personal Care/Deo Perfumes/1449Capture326.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('86', 'Yardley - English Lavender Deo', '7', '3', '225', 'Images/Personal Care/Deo Perfumes/2937Capture937.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('87', 'Yardley - English Rose Deo', '7', '3', '65', 'Images/Personal Care/Deo Perfumes/03519E20-B9EF-4ED6-83CB-A007542B2592.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('88', 'Yardley - English Rose Talc', '7', '3', '45', 'Images/Personal Care/Deo Perfumes/5676.js', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('89', 'Yardley - Gentleman Deo Spray', '7', '3', '41', 'Images/Personal Care/Deo Perfumes/880572B3-9A9D-4693-90B4-C27B89AEB21A.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('90', 'Yardley - Gentleman Talc', '7', '3', '164', 'Images/Personal Care/Deo Perfumes/1006062a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('91', 'Yardley - Deo Lace', '7', '3', '41', 'Images/Personal Care/Deo Perfumes/1006063a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('92', 'Wildstone - Forest Spice Deo', '7', '3', '185', 'Images/Personal Care/Deo Perfumes/1006113a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('93', 'Wildstone - Hydra Energy Talc', '7', '3', '60', 'Images/Personal Care/Deo Perfumes/1006114a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('94', 'Wildstone - Ultra Sensual Talcum Powder', '7', '3', '60', 'Images/Personal Care/Deo Perfumes/1006115a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('95', 'Spinz - Exotic Talcum Powder', '7', '3', '60', 'Images/Personal Care/Deo Perfumes/1006145c_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('96', 'Yardley - English Lavender Talcum Powder', '7', '3', '24', 'Images/Personal Care/Deo Perfumes/1006146a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('97', 'Yardley - Gold Legend Men Deo', '7', '3', '36', 'Images/Personal Care/Deo Perfumes/1006203a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('98', 'Yardley - Gold Men Deo', '7', '3', '36', 'Images/Personal Care/Deo Perfumes/1006204a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('99', 'Yardley - Gold Elegance Men Deo', '7', '3', '158', 'Images/Personal Care/Deo Perfumes/1006206a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('100', 'Yardley - Gold Talcum Powder', '7', '3', '168', 'Images/Personal Care/Deo Perfumes/1006207a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('101', 'Yardley - Lace Satin Deo', '7', '3', '160', 'Images/Personal Care/Deo Perfumes/1006280a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('102', 'Yardley - Morning Dew Deo', '7', '3', '69', 'Images/Personal Care/Deo Perfumes/1006324a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('103', 'Yardley - Red Rose Talcum Powder', '7', '3', '185', 'Images/Personal Care/Deo Perfumes/1006369a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('104', 'Dermi Cool - Prickly Powder Lavender', '7', '3', '680', 'Images/Personal Care/Deo Perfumes/1006370a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('105', 'He - Recharge Deo', '7', '3', '170', 'Images/Personal Care/Deo Perfumes/1006378a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('106', 'He - Ruler Deo', '7', '3', '38', 'Images/Personal Care/Deo Perfumes/1006379b_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('107', 'Provogue - Dark Affairs Deo', '7', '3', '30', 'Images/Personal Care/Deo Perfumes/1006386a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('108', 'Provogue - Power Play Deo', '7', '3', '180', 'Images/Personal Care/Deo Perfumes/1006388a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('109', 'Provogue - Swagger Deo', '7', '3', '40', 'Images/Personal Care/Deo Perfumes/1006389a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('110', 'Provogue - Devour Deo', '7', '3', '32', 'Images/Personal Care/Deo Perfumes/1006416a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('111', 'Provogue - Wild Desire Deo', '7', '3', '170', 'Images/Personal Care/Deo Perfumes/1006418a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('112', 'Yardley - London Mist Doe', '7', '3', '50.53', 'Images/Personal Care/Deo Perfumes/1006419a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('113', 'He - Confident Deo', '7', '3', '31', 'Images/Personal Care/Deo Perfumes/1006420a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('114', 'Yardley - Women London Mist Deo', '7', '3', '185', 'Images/Personal Care/Deo Perfumes/1006421a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('115', 'He - Extrovert Deo', '7', '3', '50', 'Images/Personal Care/Deo Perfumes/1006424a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('116', 'He - Magician Deo', '7', '3', '72', 'Images/Personal Care/Deo Perfumes/1006427a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('117', 'He - Smart Deo', '7', '3', '248', 'Images/Personal Care/Deo Perfumes/1006428a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('118', 'Engage Man - Intensity Deo', '7', '3', '171', 'Images/Personal Care/Deo Perfumes/1006433a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('119', 'Engage Man - Fuzz Deo', '7', '3', '72', 'Images/Personal Care/Deo Perfumes/1006418a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('120', 'Engage Man - Jump Deo', '7', '3', '68', 'Images/Personal Care/Deo Perfumes/1006419a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('121', 'Engage Man - Frost Deo', '7', '3', '68', 'Images/Personal Care/Deo Perfumes/1006420a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('122', 'Engage Women - O\'Whiff Deo', '7', '3', '45', 'Images/Personal Care/Deo Perfumes/1006421a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('123', 'Engage Women - Tempt Deo', '7', '3', '65.55', 'Images/Personal Care/Deo Perfumes/1006424a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('127', 'Dabur - Gulabari (Rose Water)', '7', '4', '69', 'Images/Personal Care/Facial Care/0C800DC6-2D30-4D8D-B24B-F5D6786BC50D.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('128', 'Lakme - Strawberry Silk Face Wash', '7', '4', '58', 'Images/Personal Care/Facial Care/4A2D5D17-2BEC-4A60-9ED5-EC936CF689E0.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('129', 'Neutrogena - Deep Clean Facial Cleanser', '7', '4', '180', 'Images/Personal Care/Facial Care/7D485F22-F979-4F65-B0F5-3CEDCF4CFDF5.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('130', 'Himalaya - Fairness Kesar Face Wash', '7', '4', '72', 'Images/Personal Care/Facial Care/17D10BD1-DCC8-4DBF-8249-68D7789FAE35.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('131', 'Himalaya - Oil Clear Lemon Face Wash', '7', '4', '99', 'Images/Personal Care/Facial Care/99C77948-7CC1-411B-9B8B-40807A5D0BCC.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('132', 'Himalaya - Purifying Neem Facewash', '7', '4', '60', 'Images/Personal Care/Facial Care/305B53B5-353D-49CB-A292-18DB9A669AB4.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('133', 'Clean & Clear - Morning Energy Face Wash - Le...', '7', '4', '180', 'Images/Personal Care/Facial Care/1149lotus.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('134', 'Lotus Herbals - Berry Scrub Face Wash', '7', '4', '70', 'Images/Personal Care/Facial Care/2387olay.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('135', 'Vlcc - Barberry Scrub', '7', '4', '75', 'Images/Personal Care/Facial Care/2703nivea.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('136', 'Himalaya - Gentle Exfoliating Walnut Scrub', '7', '4', '75', 'Images/Personal Care/Facial Care/3700ponds.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('137', 'Nivea - All In 1 Face Wash', '7', '4', '75', 'Images/Personal Care/Facial Care/4175biotique_quince_facial_55_gram.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('138', 'Olay - Natural White Cleanser', '7', '4', '75', 'Images/Personal Care/Facial Care/4438neem.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('139', 'Biotique - Neem Face Wash', '7', '4', '36', 'Images/Personal Care/Facial Care/4475ponds.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('140', 'Garnier - Pure Active Scrub', '7', '4', '95', 'Images/Personal Care/Facial Care/5622olay_natural_white.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('141', 'Nivea For Men - Oil Control Moisturizer', '7', '4', '1400', 'Images/Personal Care/Facial Care/5676.js', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('142', 'Biotique - Walnut Purify & Polish Scrub', '7', '4', '1400', 'Images/Personal Care/Facial Care/5719Everyuth%20Lemon%20Face%20Wash11-500x500.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('143', 'Vlcc - Anti Tan Single Facial Kit', '7', '4', '1400', 'Images/Personal Care/Facial Care/5991ponds.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('144', 'Biotique - Neem Face Wash', '7', '4', '10', 'Images/Personal Care/Facial Care/7723lotus-berry-scrb-wash.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('145', 'Garnier - Pure Active Scrub', '7', '4', '39', 'Images/Personal Care/Facial Care/8466white-radiance-cleanser--_2_.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('146', 'Nivea For Men - Oil Control Moisturizer', '7', '4', '39', 'Images/Personal Care/Facial Care/1005005a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('147', 'Biotique - Walnut Purify & Polish Scrub', '7', '4', '180', 'Images/Personal Care/Facial Care/1005009b.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('148', 'Vlcc - Anti Tan Single Facial Kit', '7', '4', '31', 'Images/Personal Care/Facial Care/1005012b_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('149', 'Vlcc - Fruit Facial Kit Single', '7', '4', '160', 'Images/Personal Care/Facial Care/1005013a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('150', 'Vlcc - Diamond Polish Face Scrub', '7', '4', '50', 'Images/Personal Care/Facial Care/1005014a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('151', 'Emami - Fair And Handsome Face Wash', '7', '4', '88', 'Images/Personal Care/Facial Care/1005015a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('152', 'Fair & Lovely - Pimple Off Fairness Face Wash', '7', '4', '80', 'Images/Personal Care/Facial Care/1005016a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('153', 'Joy - Pure Neem Face Wash', '7', '4', '80', 'Images/Personal Care/Facial Care/1005018a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('154', 'Joy - Skin Fruits Face Wash Lemon', '7', '4', '57', 'Images/Personal Care/Facial Care/1005019a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('155', 'Joy - Skin Fruits Face Wash Apple', '7', '4', '60', 'Images/Personal Care/Facial Care/1005023a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('156', 'Olay - Total Effect Normal Uv', '7', '4', '185', 'Images/Personal Care/Facial Care/1005027a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('157', 'Pond\'s - Complete Solution Pimple Clear Face ...', '7', '4', '70', 'Images/Personal Care/Facial Care/1005028a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('158', 'Fair & Lovely - Advance Multi Vitamin Cream', '7', '4', '70', 'Images/Personal Care/Facial Care/1005030a_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('159', 'Biotique - Whitening Facewash', '7', '4', '70', 'Images/Personal Care/Facial Care/1005031a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('160', 'Clean & Clear - Pimple Clearing Facewash', '7', '4', '171', 'Images/Personal Care/Facial Care/1005034a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('161', 'Godrej No .1 - Nature White Facewash', '7', '4', '155', 'Images/Personal Care/Facial Care/1005036a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('162', 'L\'Oreal Paris - Perfect Skin 20+ Face Wash', '7', '4', '350', 'Images/Personal Care/Facial Care/1005037a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('163', 'L\'Oreal Paris - Perfect Skin 30+ Face Wash', '7', '4', '315', 'Images/Personal Care/Facial Care/1005058a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('164', 'Clean & Clear - Moisturer', '7', '4', '110', 'Images/Personal Care/Facial Care/1005037a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('165', 'Dabur - Gulabari Lotion', '7', '4', '158', 'Images/Personal Care/Facial Care/1005058a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('166', 'Parachute - Advanced Hair Oil', '7', '5', '86', 'Images/Personal Care/Deo Perfumes/2EC5CF6D-4F7C-43E1-B297-E5814CCC2DEC.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('167', 'Parachute - Coconut Hair Oil', '7', '5', '52', 'Images/Personal Care/Deo Perfumes/1449Capture326.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('168', 'Tresemme - Hair Spa Shampoo', '7', '5', '166', 'Images/Personal Care/Deo Perfumes/2937Capture937.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('169', 'Himalaya - Anti Dandruff Shampoo', '7', '5', '165', 'Images/Personal Care/Deo Perfumes/03519E20-B9EF-4ED6-83CB-A007542B2592.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('170', 'Himalaya - Anti Hairfall Shampoo', '7', '5', '80', 'Images/Personal Care/Deo Perfumes/5676.js', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('171', 'Himalaya - Protein Shampoo Gentle Daily Care', '7', '5', '430', 'Images/Personal Care/Deo Perfumes/880572B3-9A9D-4693-90B4-C27B89AEB21A.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('172', 'Tresemme - Climate Protection Conditioner', '7', '5', '329', 'Images/Personal Care/Deo Perfumes/1006062a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('173', 'Tresemme - Climate Protection Shampoo', '7', '5', '72', 'Images/Personal Care/Deo Perfumes/1006063a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('174', 'Tresemme - Hair Fall Defense Shampoo', '7', '5', '80', 'Images/Personal Care/Deo Perfumes/1006113a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('175', 'Tresemme - Smooth & Shiney Shampoo', '7', '5', '60', 'Images/Personal Care/Deo Perfumes/1006114a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('176', 'Tresemme - Hair Fall Control Conditioner', '7', '5', '120', 'Images/Personal Care/Deo Perfumes/1006115a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('177', 'Mediker - Plus Anti Lice Coconut Oil', '7', '5', '275', 'Images/Personal Care/Deo Perfumes/1006145c_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('178', 'Colgate Plax - Peppermint Mouthwash', '7', '6', '849', 'Images/Personal Care/Deo Perfumes/1006146a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('179', 'Oral-B - Pro Health Gum Care Medium', '7', '6', '75', 'Images/Personal Care/Deo Perfumes/1006203a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('180', 'Colgate - Active Salt Tooth Paste', '7', '6', '135', 'Images/Personal Care/Deo Perfumes/1006204a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('181', 'Close Up - Fire Freeze Toothpaste', '7', '6', '100', 'Images/Personal Care/Deo Perfumes/1006206a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('182', 'Colgate - 360 Degree Surround Toothbrush', '7', '6', '129', 'Images/Personal Care/Deo Perfumes/1006207a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('183', 'Colgate - Sensitive Toothpaste', '7', '6', '430', 'Images/Personal Care/Deo Perfumes/1006280a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('184', 'Himalaya - Complete Care Tothpaste', '7', '6', '200', 'Images/Personal Care/Deo Perfumes/1006324a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('185', 'Gillette - Gel Sensitive Skin', '7', '7', '100', 'Images/Personal Care/Deo Perfumes/1006369a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('186', 'Gillette - Pressto Razor', '7', '7', '100', 'Images/Personal Care/Deo Perfumes/1006370a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('187', 'Yardley - Gold Original Shaving Cream', '7', '7', '50', 'Images/Personal Care/Deo Perfumes/1006378a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('188', 'Yardley - Gold Elegance After Shave Lotion', '7', '7', '75', 'Images/Personal Care/Deo Perfumes/1006379b_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('189', 'MACH3 RAZOR + REGULAR FOAM 196GM + TRAVEL PACK (TRAVEL POUCH) ', '7', '7', '70', 'Images/Personal Care/Deo Perfumes/1006386a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('190', 'Gillette - Venus Gift Pack', '7', '7', '269', 'Images/Personal Care/Deo Perfumes/1006388a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('191', 'Supermax - Swift Rc Razor', '7', '7', '229', 'Images/Personal Care/Deo Perfumes/1006389a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('192', '7\'O Clock - P-Ii Cartridge', '7', '7', '269', 'Images/Personal Care/Deo Perfumes/1006416a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('193', 'Premium - Eau De Cologne Regular', '7', '7', '225', 'Images/Personal Care/Deo Perfumes/1006418a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('194', 'Gillette - Fusion Hydra Gel Sensitive Skin', '7', '7', '225', 'Images/Personal Care/Deo Perfumes/1006419a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('195', 'Gillette - Fusion Power Razor', '7', '7', '65', 'Images/Personal Care/Deo Perfumes/1006420a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('196', 'Gillette - Mach3 Turbo Razor', '7', '7', '45', 'Images/Personal Care/Deo Perfumes/1006421a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('197', 'Kamasutra - Shaving Foam Spark + On Combo', '7', '7', '41', 'Images/Personal Care/Deo Perfumes/1006424a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('198', 'Kamasutra - Shaving Foam Spark + Urge Combo', '7', '7', '164', 'Images/Personal Care/Deo Perfumes/1006427a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('199', 'Supermax - Swift Cartridge', '7', '7', '41', 'Images/Personal Care/Deo Perfumes/1006428a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('200', 'Supermax - Swift Razor', '7', '7', '185', 'Images/Personal Care/Deo Perfumes/1006433a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('201', 'Supermax - Vidyut Blade', '7', '7', '60', 'Images/Personal Care/Creams And Lotions/7092Capture310.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('202', 'Gillette - Series Pure & Sensitive Foam', '7', '7', '60', 'Camay - Soap Natural White', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('203', 'Gillette - Mach 3 Irritation Defence Foam', '7', '7', '60', 'Dettol - Cool Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('204', 'Gillette - Mach 3 Irritation Defence Gel', '7', '7', '24', 'Dettol - Original Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('205', 'Gillette - Satin Care Shaving Gel', '7', '7', '36', 'Dettol - Skin Care Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('206', 'Old Spice - After Shave Automiser Original', '7', '7', '36', 'Fiama Di Wills - Aqua Pulse Shower Gel', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('207', 'Park Avenue - Shave Gel', '7', '7', '158', 'Lifebuoy - Care Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('208', 'Nivea For Men - After Shave Balm Fresh Active', '7', '7', '168', 'Lifebuoy - Nature Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('209', 'Nivea - Mens Grooming Kit', '7', '7', '160', 'Lux - Fresh Splash Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('210', 'Camay - Soap Natural White', '7', '8', '69', 'Lux - Soft Touch Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('211', 'Dettol - Cool Soap', '7', '8', '185', 'Pears - Germ Shield Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('212', 'Dettol - Original Soap', '7', '8', '680', 'Pears - Oil Control Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('213', 'Dettol - Skin Care Soap', '7', '8', '170', 'Pears - Pure & Gentle Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('214', 'Fiama Di Wills - Aqua Pulse Shower Gel', '7', '8', '38', 'Lifebuoy - Total 10 Hand Wash', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('215', 'Lifebuoy - Care Soap', '7', '8', '30', 'Dettol - Sensitive Handwash', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('216', 'Lifebuoy - Nature Soap', '7', '8', '180', 'Fiama Di Wills - Exoctic Dream Shower Gel', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('217', 'Lux - Fresh Splash Soap', '7', '8', '40', 'Fem - Blossom Liquid Hand Wash', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('218', 'Lux - Soft Touch Soap', '7', '8', '32', 'Dettol - Skincare Handwash Refill Pouch', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('219', 'Pears - Germ Shield Soap', '7', '8', '170', 'Santoor - Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('220', 'Pears - Oil Control Soap', '7', '8', '50.53', 'Himalaya - Neem & Turmeric Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('221', 'Pears - Pure & Gentle Soap', '7', '8', '31', 'Medimix - Sandal Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('222', 'Lifebuoy - Total 10 Hand Wash', '7', '8', '185', 'Godrej No .1 - Sandal & Turmeric Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('223', 'Dettol - Sensitive Handwash', '7', '8', '50', 'Cinthol - Strong Germ Protection Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('224', 'Fiama Di Wills - Exoctic Dream Shower Gel', '7', '8', '72', 'Santoor - Hand Wash Essential Oil', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('225', 'Fem - Blossom Liquid Hand Wash', '7', '8', '248', 'Tetmosol - Medicated Soap', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('226', 'Dettol - Skincare Handwash Refill Pouch', '7', '8', '171', 'Images/Personal Care/Cosmetics/1059dark.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('227', 'Santoor - Soap', '7', '8', '72', 'Images/Personal Care/Cosmetics/3005bg_brwn.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('228', 'Himalaya - Neem & Turmeric Soap', '7', '8', '68', 'Images/Personal Care/Cosmetics/4263E91D-8F2F-4C3A-8267-E992B10D6B22.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('229', 'Medimix - Sandal Soap', '7', '8', '68', 'Images/Personal Care/Cosmetics/6718kajal.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('230', 'Godrej No .1 - Sandal & Turmeric Soap', '7', '8', '45', 'Images/Personal Care/Cosmetics/8375bg_dbwn.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('231', 'Cinthol - Strong Germ Protection Soap', '7', '8', '65.55', 'Images/Personal Care/Cosmetics/8471revlon-top-speed-natural%20black.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('232', 'Santoor - Hand Wash Essential Oil', '7', '8', '69', 'Images/Personal Care/Cosmetics/8703brown.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('233', 'Tetmosol - Medicated Soap', '7', '8', '58', 'Images/Personal Care/Cosmetics/9617henna-nupur-mehendi.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('234', 'Moti - Gulabari Soap', '7', '8', '180', 'Images/Personal Care/Cosmetics/24321n.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('235', 'Fiama Di Wills - Clear Springs Shower Gel', '7', '8', '72', 'Images/Personal Care/Cosmetics/1001001a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('236', 'Liril 2000 - Soap', '7', '8', '99', 'Images/Personal Care/Cosmetics/1001002a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('237', 'Vivel - Aloevera Soap', '7', '8', '60', 'Images/Personal Care/Cosmetics/1001004a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('238', 'Yardley - English Lavender Soap', '7', '8', '180', 'Images/Personal Care/Cosmetics/1001005a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('239', 'Yardley - Sandalwood Soap', '7', '8', '70', 'Images/Personal Care/Cosmetics/1001006a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('240', 'Vivel - Mixed Fruit + Cream Soap', '7', '8', '75', 'Images/Personal Care/Cosmetics/1001008a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('241', 'Godrej - Fairglow Regular Soap', '7', '8', '75', 'Images/Personal Care/Cosmetics/1001009a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('242', 'Godrej No .1 - Saffron & Milk Soap', '7', '8', '75', 'Images/Personal Care/Cosmetics/1001013a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('243', 'Camay - Chic Soap', '7', '8', '75', 'Images/Personal Care/Cosmetics/1001014a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('244', 'Lifebuoy - Handwash Nature Pump', '7', '8', '36', 'Images/Personal Care/Cosmetics/1001015a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('245', 'Fiama Di Wills - La Fantasia Gel Soap', '7', '8', '95', 'Images/Personal Care/Cosmetics/1001016a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('246', 'Fiama Di Wills - Reo Splash Gel Bathing Bar S...', '7', '8', '1400', 'Images/Personal Care/Cosmetics/1001023a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('247', 'Vivel - Green Tea Soap', '7', '8', '1400', 'Images/Personal Care/Cosmetics/1001044a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('248', 'Chandrika - Soap', '7', '8', '1400', 'Images/Personal Care/Cosmetics/1001046b_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('249', 'Fiama Di Wills - Exotic Dream Soap', '7', '8', '10', 'Images/Personal Care/Cosmetics/1001047a_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('250', 'Lifebuoy - Care Fresh Soap', '7', '8', '39', 'Images/Personal Care/Cosmetics/1001052a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('251', 'Mysore Sandal - Gold Soap', '7', '8', '39', 'Images/Personal Care/Cosmetics/1001054a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('252', 'Khadi Herbal - Lemon Soap', '7', '8', '180', 'Images/Personal Care/Cosmetics/1001055a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('253', 'Khadi Herbal - Honey & Mix Fruit Soap', '7', '8', '31', 'Images/Personal Care/Cosmetics/1001064a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('254', 'Khadi Herbal - Sandal Soap', '7', '8', '160', 'Images/Personal Care/Cosmetics/1001065a_front.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('255', 'Khadi Herbal - Neem Tulsi Soap', '7', '8', '50', 'Images/Personal Care/Cosmetics/1001066a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('256', 'Pears - Soft & Fresh Soap', '7', '8', '88', 'Images/Personal Care/Cosmetics/1001101a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('257', 'Vivel - Mixed Fruit Soap', '7', '8', '75', 'Images/Personal Care/Cosmetics/1001102a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('258', 'Soulflower - Heart Bath Set With Lavender', '7', '8', '36', 'Images/Personal Care/Cosmetics/1001107a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('259', 'Soulflower - Heart Bath Set With Rose', '7', '8', '95', 'Images/Personal Care/Cosmetics/1001120a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('260', 'Soulflower - Heart Bath Set With Jasmine', '7', '8', '1400', 'Images/Personal Care/Cosmetics/1001123a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('261', 'Dermi Cool - Soap', '7', '8', '1400', 'Images/Personal Care/Cosmetics/1001126a_back.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('262', 'Dettol - Re-Energize Handwash', '7', '8', '1400', 'Images/Personal Care/Cosmetics/1001127a.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('263', 'Dettol - Cool Handwash', '7', '8', '10', 'Images/Personal Care/Deo Perfumes/2EC5CF6D-4F7C-43E1-B297-E5814CCC2DEC.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('264', 'Fiama Di Wills - Patchouli & Macadamia Gel Ba...', '7', '8', '39', 'Images/Personal Care/Deo Perfumes/1449Capture326.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('265', 'Moti - Luxury Bath Sandal Soap', '7', '8', '39', 'Images/Personal Care/Deo Perfumes/2EC5CF6D-4F7C-43E1-B297-E5814CCC2DEC.jpg', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('266', 'Palmolive - Ayurituel Joyous Shower Gel', '7', '8', '180', 'Images/Personal Care/Deo Perfumes/1449Capture326.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('267', 'Liril 2000 - Tea Tree Oil Soap', '7', '8', '31', 'Images/Personal Care/Deo Perfumes/2937Capture937.JPG', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('268', 'Cinthol - Confidence+', '7', '8', '160', 'Images/Personal Care/Deo Perfumes/03519E20-B9EF-4ED6-83CB-A007542B2592.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('269', 'Diversey - Soft Care Enhance Handwash', '7', '8', '50', 'Images/Personal Care/Deo Perfumes/5676.js', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);
INSERT INTO `products` VALUES ('270', 'Loading more products...', '7', '8', '88', 'Images/Personal Care/Deo Perfumes/880572B3-9A9D-4693-90B4-C27B89AEB21A.png', null, null, null, null, null, null, null, null, null, null, null, null, '100', null, null, null, null, null, null, null);

-- ----------------------------
-- Table structure for `shippers`
-- ----------------------------
DROP TABLE IF EXISTS `shippers`;
CREATE TABLE `shippers` (
  `shipper_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `company_name` longtext,
  `phone` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`shipper_key`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of shippers
-- ----------------------------

-- ----------------------------
-- Table structure for `sub_category`
-- ----------------------------
DROP TABLE IF EXISTS `sub_category`;
CREATE TABLE `sub_category` (
  `sub_category_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `category_ref` bigint(20) DEFAULT NULL,
  `sub_category_name` longtext,
  `description` longtext,
  `picture` longtext,
  `active` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`sub_category_key`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sub_category
-- ----------------------------
INSERT INTO `sub_category` VALUES ('1', '7', 'Cosmetics', null, null, null);
INSERT INTO `sub_category` VALUES ('2', '7', 'Creams & Lotions', null, null, null);
INSERT INTO `sub_category` VALUES ('3', '7', 'Deos, Talcs & Perfumes', null, null, null);
INSERT INTO `sub_category` VALUES ('4', '7', 'Facial Care', null, null, null);
INSERT INTO `sub_category` VALUES ('5', '7', 'Hair Care', null, null, null);
INSERT INTO `sub_category` VALUES ('6', '7', 'Oral Care', null, null, null);
INSERT INTO `sub_category` VALUES ('7', '7', 'Shaving Needs', null, null, null);
INSERT INTO `sub_category` VALUES ('8', '7', 'Soap & Body Wash', null, null, null);

-- ----------------------------
-- Table structure for `sub_category_copy`
-- ----------------------------
DROP TABLE IF EXISTS `sub_category_copy`;
CREATE TABLE `sub_category_copy` (
  `SubCategoryID` bigint(20) NOT NULL AUTO_INCREMENT,
  `CategoryID` bigint(20) DEFAULT NULL,
  `SubCategoryName` longtext,
  `Discription` longtext,
  `Picture` longtext,
  `Active` bigint(20) DEFAULT NULL,
  PRIMARY KEY (`SubCategoryID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of sub_category_copy
-- ----------------------------
INSERT INTO `sub_category_copy` VALUES ('1', '7', 'Cosmetics', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('2', '7', 'Creams & Lotions', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('3', '7', 'Deos, Talcs & Perfumes', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('4', '7', 'Facial Care', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('5', '7', 'Hair Care', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('6', '7', 'Oral Care', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('7', '7', 'Shaving Needs', null, null, null);
INSERT INTO `sub_category_copy` VALUES ('8', '7', 'Soap & Body Wash', null, null, null);

-- ----------------------------
-- Table structure for `suppliers`
-- ----------------------------
DROP TABLE IF EXISTS `suppliers`;
CREATE TABLE `suppliers` (
  `supplier_key` bigint(20) NOT NULL AUTO_INCREMENT,
  `company_name` longtext,
  `contact_fname` longtext,
  `contact_lname` longtext,
  `contact_title` longtext,
  `address1` longtext,
  `address2` longtext,
  `city` longtext,
  `state` longtext,
  `postal_code` bigint(20) DEFAULT NULL,
  `country` longtext,
  `phone` varchar(20) DEFAULT NULL,
  `fax` bigint(20) DEFAULT NULL,
  `email` longtext,
  `url` longtext,
  `payment_methods` longtext,
  `discount_type` bigint(20) DEFAULT NULL,
  `type_goods` bigint(20) DEFAULT NULL,
  `notes` longtext,
  `discount_available` bigint(20) DEFAULT NULL,
  `current_order` longtext,
  `logo` longtext,
  `customer_ref` bigint(20) DEFAULT NULL,
  `size_url` longtext,
  `password` longtext,
  `active` int(1) NOT NULL DEFAULT '0',
  `otp` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`supplier_key`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of suppliers
-- ----------------------------
INSERT INTO `suppliers` VALUES ('4', null, null, null, null, null, null, null, null, null, null, '4444', null, 'sharma.sunil.nov@gmail.com', null, null, null, null, null, null, null, null, null, null, '4321', '0', 'Id6ebWOh');
