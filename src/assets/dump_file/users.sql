-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: May 25, 2021 at 09:26 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `express_users`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `password` text,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `first_name`, `last_name`, `email`, `password`, `created_at`, `updated_at`) VALUES
(28, 'Arito', 'Suwa', 'suma@gmail.com', '$2b$10$B2toczsm8.wpIWzJZuT83uNkGlGF1RKCHD97EtuC8IYjdwexVg5zi', '2021-05-25 14:15:48', NULL),
(29, 'Ivan Christian Jay ', 'Funcion', 'icfuncion@gmail.com', '$2b$10$ttrMnKZ98C42bmv7.F8pHuYm1r8KBYoSZDtC3CtSf5IPqD7vsLAf6', '2021-05-25 14:16:36', NULL),
(30, 'Mavis ', 'Vermillion', 'mavisvermillion@gmail.com', '$2b$10$Lt0V49TPGD4h7FolKnBk/.n95vcf.pgrTm3dcrvmPCccuAGO1cplC', '2021-05-25 14:54:58', NULL),
(31, 'Natsu ', 'Dragneel', 'natsudragneel@gmail.com', '$2b$10$TCM1a/69zwjUYiR4s5z8SeSuzAa7cy/YPQUE2ZvgoX.u2tZcNFfji', '2021-05-26 05:21:11', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=32;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
