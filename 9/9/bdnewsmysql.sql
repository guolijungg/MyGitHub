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
  `thumb_path` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`news_id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `news` */

insert  into `news`(`news_id`,`news_title`,`news_content`,`news_mark`,`post_time`,`news_classification`,`thumb_path`) values (17,'是大法官泛海国际可好看了就','烦得很高房价和顾客结了婚','说过的话费劲','2017-01-03 14:20:22','本地','./public/upload/1483424422033.jpg'),(18,'去玩儿问题要如题优品','清热台湾人月日哦','规范化及国际化','2017-01-03 14:20:16','本地','./public/upload/1483424416919.jpg'),(9,'“中国不存在雾霾”？ 不能再让这种论调遮人心','少时诵诗书所所所所所所所所所所所所所所所所所','凤凰新闻','2017-01-03 14:39:06','社会','./public/upload/1483425546025.jpg'),(19,'福原爱与江宏杰台北完婚 小爱甜笑止不住','日本乒乓球人气球星福原爱与台湾运动员江宏杰在台北举行婚礼，并坦言“嫁鸡随鸡”，幸福兑现了自己之前许下的诺言：“我现在的重点是扮演好一个家庭主妇的角色。”','环球网','2017-01-03 14:24:12','本地','./public/upload/1483424596720.jpg'),(11,'指尖上的传承：提琴“灵魂”的制造者','沈阳音乐学院第三教学楼一楼的这条通往乐器工艺系的走廊，单汝通走了31年。他是这里乐器工艺系的一名副教授，国家一级提琴制作师。','余诗泉','2017-01-03 14:39:01','社会','./public/upload/1483425541551.jpg'),(12,'道德的食肉者？英国女记者只吃自己打猎的肉','英国《每日邮报》12月26日报道，英国有一名女子Louise Gray在一年来只吃自己打猎来的肉。Gray是个环境记者，之前从未打过猎，父亲是个农民。她听说“道德的食肉者”这个概念后，觉得应该对自己所食用的肉有更多的思考，搞清动物是怎么成为盘中餐的，因此去乡下跟猎场看守人学了各种打猎技巧，然后开始了一年来的试验。','余诗泉','2017-01-03 14:38:56','社会','./public/upload/1483425536976.jpg'),(15,'南昌大学原校长获刑12年 曾称“士可杀不可辱”','而为贵航股份的故事发生过的首位韩国电视剧回房间看就','搜狐新闻','2017-01-03 14:38:48','社会','./public/upload/1483425528012.jpg'),(16,'小程序没有入口，不能分享、搜索，创业者要失望了','萨达电视电话规范化第三个发大幅度素冠荷鼎国际化开个建行卡两节课工会经费喊得翻刚到法定暗室逢灯上古符大华股份脚后跟开发极好的归属的说法是','搜狐新闻','2017-01-03 14:20:29','本地','./public/upload/1483424429559.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
