/*
SQLyog Ultimate v8.32 
MySQL - 5.5.40 : Database - bdnews
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bdnews` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `bdnews`;

/*Table structure for table `news` */

DROP TABLE IF EXISTS `news`;

CREATE TABLE `news` (
  `news_id` int(11) NOT NULL AUTO_INCREMENT,
  `news_title` varchar(100) NOT NULL,
  `news_content` text NOT NULL,
  `news_mark` varchar(32) NOT NULL,
  `post_time` varchar(19) NOT NULL,
  `news_classification` varchar(32) NOT NULL,
  `path_name` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=MyISAM AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;

/*Data for the table `news` */

insert  into `news`(`news_id`,`news_title`,`news_content`,`news_mark`,`post_time`,`news_classification`,`path_name`) values (4,'“中国不存在雾霾”？ 不能再让这种论调遮人心','重霾连日，让人们心头沉重。今天夜间，受冷空气影响，中东部地区的大范围雾霾天气将自北向南逐渐减弱或消散。好消息传来，人们眉头略为舒解。 不过，此轮重霾下，也有否定中国存在霾的观点广泛传播，这种观点认为“雾霾，其实就是雾而已。冬天常起雾，起雾天必灰，这是常识。” 更极端的说法体现在《人类史上最大的骗局：中国雾霾》一文中，认为中国雾霾是人类历史上最大的骗局，设局的商人、学者、组织发挥想象力，拼凑数据、证据，发布各式各样的雾霾危害论。 中国或世界上有没有雾霾，以及雾霾是否有害，国内外已经有大量的研究结果予以解读和证明，如果连这些基本问题都要否定，只能说，雾霾不仅蒙住了一些人的眼睛，更遮蔽了一些人的心灵，既缺少了真实的感知，又失缺了基本的认知。 否认中国存在雾霾，是把雾和霾混在一起，就要从常识说起。','搜狐新闻','2016年12月21日 11:39','热点','../uploads/1482737247.jpg'),(5,'南昌大学原校长获刑12年 曾称“士可杀不可辱”','原标题：快讯| 南昌大学原校长周文斌案件宣判 信息日报“江西政读”(微信号:xxrbszb)获悉，就在刚刚，江西省高级人民法院公开开庭审理、宣判周文斌受贿、挪用公款上诉案。 江西省高级人民法院于2016年12月21日上午在该院第四审判法庭公开开庭审理了原南昌大学校长周文斌受贿、挪用公款上诉一案，并当庭作出判决，以受贿罪判处周文斌有期徒刑十二年，并处没收个人财产一百万元；对其受贿犯罪所得依法予以追缴，上缴国库。 经审理查明:上诉人周文斌身为国家工作人员，利用职务上的便利，为他人谋取利益，非法收受他人财物共计人民币1938.8万元、港币30万元、美元1万元、韩元90万元、购物卡2.4万元、卡地亚手表一块(价值3.86万元),其行为构成受贿罪，且数额特别巨大。原判程序合法，认定周文斌的主要受贿犯罪事实清楚，证据确实充分。认定周文斌收受王雪冬人民币60万元、2003年4月收受沈亚群人民币100万元的证据不足。认定周文斌收受刘卫东人民币4.5万元、曹小秋人民币5.5万元、张华人民币3万元构成受贿罪，认定周文斌挪用人民币5875万元构成挪用公款罪，定性不当。 鉴于周文斌二审期间认罪态度好，真诚悔罪，并对一审过程中的翻供和一些不当言行，及造成的不良社会影响，真诚认错，向有关单位和工作人员表示了道歉；且大部分赃款已被追缴，具有法定、酌定从轻处罚情节。遂依法作出前述判决。','凤凰新闻','2016年12月21日 13:6','热点','../uploads/1482737247.jpg'),(9,'“中国不存在雾霾”？ 不能再让这种论调遮人心','少时诵诗书所所所所所所所所所所所所所所所所所','凤凰新闻','2016-12-23 14:11:02','热点','../uploads/1482473462.jpg'),(11,'指尖上的传承：提琴“灵魂”的制造者','沈阳音乐学院第三教学楼一楼的这条通往乐器工艺系的走廊，单汝通走了31年。他是这里乐器工艺系的一名副教授，国家一级提琴制作师。','余诗泉','2016-12-26 16:23:15','热点','../uploads/1482740595.jpg'),(12,'道德的食肉者？英国女记者只吃自己打猎的肉','英国《每日邮报》12月26日报道，英国有一名女子Louise Gray在一年来只吃自己打猎来的肉。Gray是个环境记者，之前从未打过猎，父亲是个农民。她听说“道德的食肉者”这个概念后，觉得应该对自己所食用的肉有更多的思考，搞清动物是怎么成为盘中餐的，因此去乡下跟猎场看守人学了各种打猎技巧，然后开始了一年来的试验。','余诗泉','2016-12-26 16:17:41','热点','../uploads/1482740261.jpg'),(13,'“中国不存在雾霾”？ 不能再让这种论调遮人心','速度asd撒啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊 ','搜狐新闻','2016-12-26 16:18:01','热点','../uploads/1482740281.jpg'),(14,'“中国不存在雾霾”？ 不能再让这种论调遮人心','少时诵诗书所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所所','搜狐新闻','2016-12-26 16:20:28','热点','../uploads/1482740428.jpg');

/*Table structure for table `users` */

DROP TABLE IF EXISTS `users`;

CREATE TABLE `users` (
  `uId` int(11) NOT NULL AUTO_INCREMENT,
  `user` varchar(30) NOT NULL,
  `password` varchar(30) NOT NULL,
  `cookie` varchar(50) NOT NULL,
  PRIMARY KEY (`uId`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `users` */

insert  into `users`(`uId`,`user`,`password`,`cookie`) values (1,'admin','admin','1445422207');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
