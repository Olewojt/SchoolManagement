-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2024 at 05:24 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `school`
--

-- --------------------------------------------------------

--
-- Table structure for table `class_subjects`
--

CREATE TABLE `class_subjects` (
  `class_id` bigint(20) NOT NULL,
  `subject_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `notification`
--

CREATE TABLE `notification` (
  `id` bigint(20) NOT NULL,
  `content` varchar(255) DEFAULT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `is_read` bit(1) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `parent_children`
--

CREATE TABLE `parent_children` (
  `parent_id` bigint(20) NOT NULL,
  `child_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `personal_info`
--

CREATE TABLE `personal_info` (
  `id` bigint(20) NOT NULL,
  `city` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `date_of_birth` date DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `flat_number` varchar(255) DEFAULT NULL,
  `home_number` varchar(255) DEFAULT NULL,
  `is_from_city` bit(1) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `pesel` varchar(255) DEFAULT NULL,
  `phone_number` varchar(255) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `report`
--

CREATE TABLE `report` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `report_in_pdf` longblob DEFAULT NULL,
  `report_type` varchar(255) DEFAULT NULL,
  `user_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `school_class`
--

CREATE TABLE `school_class` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `task`
--

CREATE TABLE `task` (
  `id` bigint(20) NOT NULL,
  `created_at` datetime(6) DEFAULT NULL,
  `deadline` datetime(6) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `grade` int(11) DEFAULT NULL,
  `graded_at` datetime(6) DEFAULT NULL,
  `status` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `subject_id` bigint(20) DEFAULT NULL,
  `task_creator_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `task_assigments`
--

CREATE TABLE `task_assigments` (
  `task_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `task_attachment`
--

CREATE TABLE `task_attachment` (
  `id` varchar(255) NOT NULL,
  `data` longblob DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `task_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_subject_in_class`
--

CREATE TABLE `teacher_subject_in_class` (
  `teacher_id` bigint(20) NOT NULL,
  `school_class_id` bigint(20) NOT NULL,
  `subject_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` bigint(20) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `personal_id` bigint(20) DEFAULT NULL,
  `role_id` bigint(20) DEFAULT NULL,
  `class_id` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `class_subjects`
--
ALTER TABLE `class_subjects`
  ADD PRIMARY KEY (`class_id`,`subject_id`),
  ADD KEY `FKlfbmt51w06n4kcm7iatjq7m5r` (`subject_id`);

--
-- Indexes for table `notification`
--
ALTER TABLE `notification`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKb0yvoep4h4k92ipon31wmdf7e` (`user_id`);

--
-- Indexes for table `parent_children`
--
ALTER TABLE `parent_children`
  ADD PRIMARY KEY (`parent_id`,`child_id`),
  ADD KEY `FKmuaapgbnjgx6cxdsu7ndpsw0r` (`child_id`);

--
-- Indexes for table `personal_info`
--
ALTER TABLE `personal_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `report`
--
ALTER TABLE `report`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKj62onw73yx1qnmd57tcaa9q3a` (`user_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `school_class`
--
ALTER TABLE `school_class`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `subject`
--
ALTER TABLE `subject`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `task`
--
ALTER TABLE `task`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK5k22wv8pvap89p7wpo0ghs95g` (`subject_id`),
  ADD KEY `FKm1e3ujho15jj9tsq4trxpha76` (`task_creator_id`);

--
-- Indexes for table `task_assigments`
--
ALTER TABLE `task_assigments`
  ADD PRIMARY KEY (`task_id`,`user_id`),
  ADD KEY `FK1jvh56p85qi5qh7ut08cwxhad` (`user_id`);

--
-- Indexes for table `task_attachment`
--
ALTER TABLE `task_attachment`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKkhw6fprv9kv6uio43mem40px6` (`task_id`);

--
-- Indexes for table `teacher_subject_in_class`
--
ALTER TABLE `teacher_subject_in_class`
  ADD PRIMARY KEY (`school_class_id`,`subject_id`,`teacher_id`),
  ADD KEY `FK4ycy3d1gup8pnsadlavtmxcf7` (`subject_id`),
  ADD KEY `FKq0x6nuhd9ky2b28589c2u32pv` (`teacher_id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK68xkm4u0qf2bmg9qmukdnclh2` (`personal_id`),
  ADD KEY `FKn82ha3ccdebhokx3a8fgdqeyy` (`role_id`),
  ADD KEY `FKl59angloqtshc0dbj3mnvybt7` (`class_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `notification`
--
ALTER TABLE `notification`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `personal_info`
--
ALTER TABLE `personal_info`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `school_class`
--
ALTER TABLE `school_class`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `class_subjects`
--
ALTER TABLE `class_subjects`
  ADD CONSTRAINT `FK4cemxm83n2j30cgfox390gch5` FOREIGN KEY (`class_id`) REFERENCES `school_class` (`id`),
  ADD CONSTRAINT `FKlfbmt51w06n4kcm7iatjq7m5r` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`);

--
-- Constraints for table `notification`
--
ALTER TABLE `notification`
  ADD CONSTRAINT `FKb0yvoep4h4k92ipon31wmdf7e` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `parent_children`
--
ALTER TABLE `parent_children`
  ADD CONSTRAINT `FKmuaapgbnjgx6cxdsu7ndpsw0r` FOREIGN KEY (`child_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKmw9ra9he829lpiu7tj0tqn3yo` FOREIGN KEY (`parent_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `report`
--
ALTER TABLE `report`
  ADD CONSTRAINT `FKj62onw73yx1qnmd57tcaa9q3a` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `task`
--
ALTER TABLE `task`
  ADD CONSTRAINT `FK5k22wv8pvap89p7wpo0ghs95g` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  ADD CONSTRAINT `FKm1e3ujho15jj9tsq4trxpha76` FOREIGN KEY (`task_creator_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `task_assigments`
--
ALTER TABLE `task_assigments`
  ADD CONSTRAINT `FK1jvh56p85qi5qh7ut08cwxhad` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`),
  ADD CONSTRAINT `FKnpjl9y4qbr7q652fqve9lmmrh` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

--
-- Constraints for table `task_attachment`
--
ALTER TABLE `task_attachment`
  ADD CONSTRAINT `FKkhw6fprv9kv6uio43mem40px6` FOREIGN KEY (`task_id`) REFERENCES `task` (`id`);

--
-- Constraints for table `teacher_subject_in_class`
--
ALTER TABLE `teacher_subject_in_class`
  ADD CONSTRAINT `FK4ycy3d1gup8pnsadlavtmxcf7` FOREIGN KEY (`subject_id`) REFERENCES `subject` (`id`),
  ADD CONSTRAINT `FKj19qnrj2sqo9bymwusnkecqux` FOREIGN KEY (`school_class_id`) REFERENCES `school_class` (`id`),
  ADD CONSTRAINT `FKq0x6nuhd9ky2b28589c2u32pv` FOREIGN KEY (`teacher_id`) REFERENCES `user` (`id`);

--
-- Constraints for table `user`
--
ALTER TABLE `user`
  ADD CONSTRAINT `FK68xkm4u0qf2bmg9qmukdnclh2` FOREIGN KEY (`personal_id`) REFERENCES `personal_info` (`id`),
  ADD CONSTRAINT `FKl59angloqtshc0dbj3mnvybt7` FOREIGN KEY (`class_id`) REFERENCES `school_class` (`id`),
  ADD CONSTRAINT `FKn82ha3ccdebhokx3a8fgdqeyy` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
