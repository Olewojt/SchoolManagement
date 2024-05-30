-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 30, 2024 at 05:26 PM
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

--
-- Dumping data for table `class_subjects`
--

INSERT INTO `class_subjects` (`class_id`, `subject_id`) VALUES
(1, 1),
(1, 2),
(1, 5),
(1, 6),
(2, 2),
(2, 3),
(2, 4),
(2, 7);

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

--
-- Dumping data for table `notification`
--

INSERT INTO `notification` (`id`, `content`, `created_at`, `is_read`, `user_id`) VALUES
(1, 'Welcome to our platform', '2024-05-30 11:09:02.000000', b'0', 1),
(2, 'New assignment available', '2024-05-30 11:09:02.000000', b'0', 2),
(3, 'Don\'t forget the upcoming test', '2024-05-30 11:09:02.000000', b'0', 1),
(4, 'Project submission deadline', '2024-05-30 11:09:02.000000', b'0', 2),
(5, 'Meeting with your teacher', '2024-05-30 11:09:02.000000', b'0', 1);

-- --------------------------------------------------------

--
-- Table structure for table `parent_children`
--

CREATE TABLE `parent_children` (
  `parent_id` bigint(20) NOT NULL,
  `child_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `parent_children`
--

INSERT INTO `parent_children` (`parent_id`, `child_id`) VALUES
(12, 1),
(12, 2);

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

--
-- Dumping data for table `personal_info`
--

INSERT INTO `personal_info` (`id`, `city`, `country`, `date_of_birth`, `first_name`, `flat_number`, `home_number`, `is_from_city`, `last_name`, `pesel`, `phone_number`, `street`) VALUES
(1, 'New York', 'USA', '2024-05-30', 'John', '24', '42', b'1', 'Doe', '12345678901', '1234567890', 'Main St'),
(2, 'Chicago', 'USA', '2024-05-30', 'Jane', '12', '50', b'0', 'Smith', '98765432101', '0987654321', 'Elm St'),
(3, 'San Francisco', 'USA', '2024-05-30', 'Bob', '5', '10', b'1', 'Brown', '45612378901', '4561237890', 'Pine St'),
(4, 'Los Angeles', 'USA', '2024-05-30', 'Alice', '2', '33', b'0', 'Johnson', '32165498701', '3216549870', 'Maple St'),
(5, 'Seattle', 'USA', '2024-05-30', 'Tom', '3', '22', b'1', 'White', '15975348601', '1597534860', 'Cedar St'),
(6, 'Boston', 'USA', '2024-05-30', 'Emily', '11', '88', b'1', 'Clark', '12312312345', '1231231231', 'Oak St'),
(7, 'Houston', 'USA', '2024-05-30', 'Michael', '8', '44', b'1', 'Brown', '54354354321', '5435435432', 'Pine St'),
(8, 'Phoenix', 'USA', '2024-05-30', 'Emma', '7', '12', b'0', 'Jones', '98798798765', '9879879876', 'Spruce St'),
(9, 'Dallas', 'USA', '2024-05-30', 'David', '9', '23', b'0', 'Wilson', '65465465432', '6546546543', 'Birch St'),
(10, 'Austin', 'USA', '2024-05-30', 'Sophia', '4', '77', b'1', 'Taylor', '32132132109', '3213213210', 'Maple St');

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

--
-- Dumping data for table `report`
--

INSERT INTO `report` (`id`, `created_at`, `description`, `report_in_pdf`, `report_type`, `user_id`) VALUES
(1, '2024-05-30 11:09:02.000000', 'Math report', NULL, 'FIRST_TYPE', 1),
(2, '2024-05-30 11:09:02.000000', 'Science report', NULL, 'SECOND_TYPE', 2),
(3, '2024-05-30 11:09:02.000000', 'History report', NULL, 'THIRD_TYPE', 1),
(4, '2024-05-30 11:09:02.000000', 'PE report', NULL, 'FIRST_TYPE', 2),
(5, '2024-05-30 11:09:02.000000', 'Art report', NULL, 'SECOND_TYPE', 1);

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `name`) VALUES
(1, 'Student'),
(2, 'Teacher'),
(3, 'Administrator'),
(4, 'Parent');

-- --------------------------------------------------------

--
-- Table structure for table `school_class`
--

CREATE TABLE `school_class` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `school_class`
--

INSERT INTO `school_class` (`id`, `name`) VALUES
(1, '5A'),
(2, '8D'),
(3, '3A'),
(4, '7A'),
(5, '6A'),
(6, '2A'),
(7, '2B');

-- --------------------------------------------------------

--
-- Table structure for table `subject`
--

CREATE TABLE `subject` (
  `id` bigint(20) NOT NULL,
  `name` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `subject`
--

INSERT INTO `subject` (`id`, `name`) VALUES
(1, 'Math'),
(2, 'Science'),
(3, 'History'),
(4, 'PE'),
(5, 'Art'),
(6, 'Music'),
(7, 'Geography'),
(8, 'Biology');

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

--
-- Dumping data for table `task`
--

INSERT INTO `task` (`id`, `created_at`, `deadline`, `description`, `feedback`, `grade`, `graded_at`, `status`, `title`, `subject_id`, `task_creator_id`) VALUES
(1, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(2, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(3, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(4, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(5, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(6, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(7, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(8, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(9, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(10, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(11, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(12, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(13, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(14, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(15, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(16, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(17, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(18, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(19, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(20, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(21, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(22, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(23, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(24, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(25, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(26, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(27, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(28, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(29, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(30, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(31, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 0', NULL, NULL, NULL, 'TO_DO', 'Homework 0', 1, 8),
(32, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 1', NULL, NULL, NULL, 'TO_DO', 'Homework 1', 2, 8),
(33, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 2', NULL, NULL, NULL, 'TO_DO', 'Homework 2', 3, 8),
(34, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 3', NULL, NULL, NULL, 'TO_DO', 'Homework 3', 4, 8),
(35, '2024-05-30 11:09:02.000000', '2024-05-30 11:09:02.000000', 'Complete the assigned tasks 4', NULL, NULL, NULL, 'TO_DO', 'Homework 4', 5, 8),
(36, '2024-05-30 11:09:02.000000', '2024-06-06 11:09:02.000000', 'Complete exercises 1-10 on page 50', 'Good job', 5, '2024-05-30 11:09:02.000000', 'GRADED', 'Math Homework', 1, 8),
(37, '2024-05-30 11:09:02.000000', '2024-06-13 11:09:02.000000', 'Prepare a presentation on the solar system', 'Good job', 2, '2024-05-30 11:09:02.000000', 'GRADED', 'Science Project', 2, 8),
(38, '2024-05-30 11:09:02.000000', '2024-06-02 11:09:02.000000', 'Study chapters 1-3 for the test', 'Good job', 3, '2024-05-30 11:09:02.000000', 'GRADED', 'Math Test', 1, 8),
(39, '2024-05-30 11:09:02.000000', '2024-06-09 11:09:02.000000', 'Conduct the experiment on plant growth', NULL, NULL, NULL, 'TO_DO', 'Science Experiment', 2, 8),
(40, '2024-05-30 11:09:02.000000', '2024-06-04 11:09:02.000000', 'Solve the quiz questions in the workbook', NULL, NULL, NULL, 'TO_DO', 'Math Quiz', 1, 8),
(41, '2024-05-30 11:09:02.000000', '2024-06-04 11:09:02.000000', 'Solve the quiz questions in the workbook', NULL, NULL, NULL, 'TO_DO', 'Math Quiz', 1, 8),
(42, '2024-05-30 11:09:02.000000', '2024-06-04 11:09:02.000000', 'Solve the quiz questions in the workbook', NULL, NULL, NULL, 'TO_DO', 'Math Quiz', 1, 8),
(43, '2024-05-30 11:09:02.000000', '2024-06-04 11:09:02.000000', 'Solve the quiz questions in the workbook', NULL, NULL, NULL, 'TO_DO', 'Math Quiz', 1, 8),
(44, '2024-05-30 11:09:02.000000', '2024-06-04 11:09:02.000000', 'Solve the quiz questions in the workbook', NULL, NULL, NULL, 'TO_DO', 'Math Quiz', 1, 8);

-- --------------------------------------------------------

--
-- Table structure for table `task_assigments`
--

CREATE TABLE `task_assigments` (
  `task_id` bigint(20) NOT NULL,
  `user_id` bigint(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `task_assigments`
--

INSERT INTO `task_assigments` (`task_id`, `user_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 6),
(1, 7),
(2, 1),
(2, 3),
(2, 6),
(3, 1),
(3, 3),
(4, 1),
(4, 3),
(4, 4),
(4, 5),
(4, 6),
(4, 7),
(5, 1),
(5, 2),
(5, 3),
(5, 4),
(5, 5),
(5, 7),
(6, 2),
(6, 4),
(7, 2),
(7, 5),
(7, 6),
(7, 7),
(8, 1),
(8, 2),
(8, 3),
(8, 5),
(9, 2),
(9, 3),
(10, 2),
(10, 3),
(10, 5),
(10, 7),
(11, 1),
(11, 3),
(11, 5),
(11, 6),
(11, 7),
(12, 3),
(13, 1),
(13, 3),
(13, 5),
(13, 6),
(13, 7),
(14, 1),
(14, 2),
(14, 3),
(14, 4),
(14, 5),
(15, 1),
(15, 2),
(15, 3),
(15, 4),
(15, 7),
(16, 4),
(16, 5),
(16, 6),
(16, 7),
(17, 2),
(17, 4),
(17, 5),
(18, 1),
(18, 2),
(18, 4),
(19, 2),
(19, 4),
(19, 5),
(20, 2),
(20, 4),
(20, 5),
(20, 7),
(21, 1),
(21, 3),
(21, 5),
(21, 7),
(22, 1),
(22, 4),
(22, 5),
(22, 6),
(23, 5),
(23, 6),
(23, 7),
(24, 3),
(24, 5),
(24, 6),
(24, 7),
(25, 1),
(25, 3),
(25, 5),
(25, 6),
(26, 1),
(26, 2),
(26, 3),
(26, 4),
(26, 6),
(27, 1),
(27, 3),
(27, 4),
(27, 5),
(27, 6),
(28, 1),
(28, 2),
(28, 3),
(28, 4),
(28, 5),
(28, 6),
(28, 7),
(29, 2),
(29, 3),
(29, 6),
(29, 7),
(30, 2),
(30, 4),
(30, 6),
(30, 7),
(31, 1),
(31, 2),
(31, 6),
(31, 7),
(32, 1),
(32, 4),
(32, 6),
(32, 7),
(33, 2),
(33, 3),
(33, 5),
(33, 7),
(34, 2),
(34, 3),
(34, 7),
(35, 3),
(35, 4),
(35, 6),
(35, 7),
(36, 1),
(36, 2),
(37, 1),
(38, 2),
(39, 2),
(40, 1),
(40, 2),
(41, 1),
(42, 1),
(43, 1),
(44, 1);

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

--
-- Dumping data for table `teacher_subject_in_class`
--

INSERT INTO `teacher_subject_in_class` (`teacher_id`, `school_class_id`, `subject_id`) VALUES
(8, 1, 1),
(8, 1, 2),
(10, 1, 5),
(10, 1, 6),
(8, 2, 2),
(9, 2, 3),
(9, 2, 4),
(10, 2, 7);

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
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `email`, `password`, `personal_id`, `role_id`, `class_id`) VALUES
(1, 'john.doe@example.com', 'password123', 1, 1, 1),
(2, 'jane.smith@example.com', 'password123', 2, 1, 2),
(3, 'emily.clark@example.com', 'password123', 6, 1, 1),
(4, 'michael.brown@example.com', 'password123', 7, 1, 1),
(5, 'emma.jones@example.com', 'password123', 8, 1, 1),
(6, 'david.wilson@example.com', 'password123', 9, 1, 1),
(7, 'sophia.taylor@example.com', 'password123', 10, 1, 1),
(8, 'bob.brown@example.com', 'password123', 3, 2, NULL),
(9, 'alice.johnson@example.com', 'password123', 4, 2, NULL),
(10, 'tom.white@example.com', 'password123', 5, 2, NULL),
(11, 'admin@example.com', 'password123', 4, 3, NULL),
(12, 'parent@example.com', 'password123', 5, 4, NULL);

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
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `personal_info`
--
ALTER TABLE `personal_info`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `report`
--
ALTER TABLE `report`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `school_class`
--
ALTER TABLE `school_class`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `subject`
--
ALTER TABLE `subject`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `task`
--
ALTER TABLE `task`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=45;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` bigint(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
