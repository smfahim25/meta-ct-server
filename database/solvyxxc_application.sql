-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Aug 26, 2024 at 06:47 AM
-- Server version: 8.0.39-cll-lve
-- PHP Version: 8.3.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `solvyxxc_application`
--

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_deposits`
--

CREATE TABLE `meta_ct_deposits` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `wallet_from` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `wallet_to` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `trans_hash` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coin_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `amount` decimal(65,7) NOT NULL,
  `documents` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_deposits`
--

INSERT INTO `meta_ct_deposits` (`id`, `user_id`, `wallet_from`, `wallet_to`, `trans_hash`, `coin_id`, `amount`, `documents`, `status`, `created_at`, `updated_at`) VALUES
(3, 3, 'wallet-003', 'wallet-1003', 'hash-003', 'USDT', 50.0000000, 'doc-003', 'approved', '2024-08-08 10:40:17', '2024-08-18 05:29:00'),
(4, 4, 'wallet-004', 'wallet-1004', 'hash-004', 'BTC', 50.1000000, 'doc-004', 'approved', '2024-08-08 10:40:17', '2024-08-18 05:39:29'),
(6, 1, 'wallet-006', 'wallet-1006', 'hash-006', 'BTC', 50.5000000, 'doc-006', 'approved', '2024-08-07 18:00:00', '2024-08-18 05:33:18'),
(10, 15, 'ex5457ad3ess', 'ex5457ad3ess', 'ex3j3h2sh', '80', 30.0000000, 'uploads/1723604351363.jpg', 'approved', '2024-08-14 02:59:11', '2024-08-18 05:37:52'),
(14, 18, '0x9Fc559f7925E4B8a5b35Bbd07B7994bBFEb29745', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 50000.0000000, 'uploads/1724144339670.png', 'approved', '2024-08-20 08:58:59', '2024-08-20 08:59:12'),
(15, 20, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 500000.0000000, 'uploads/1724151457081.png', 'approved', '2024-08-20 10:57:37', '2024-08-20 10:58:40'),
(16, 19, '0xF9108407EcaBe10A9eAAB92a5F1534C5144059A6', 'fahimCdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '80', 5000000.0000000, 'uploads/1724151910330.png', 'approved', '2024-08-20 11:05:10', '2024-08-20 11:05:25'),
(17, 19, '0xF9108407EcaBe10A9eAAB92a5F1534C5144059A6', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 500000.0000000, 'uploads/1724152047082.png', 'approved', '2024-08-20 11:07:27', '2024-08-20 11:07:40'),
(23, 18, '0x9Fc559f7925E4B8a5b35Bbd07B7994bBFEb29745', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 50000.0000000, NULL, 'approved', '2024-08-20 18:18:19', '2024-08-20 18:18:42'),
(24, 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 50000.0000000, NULL, 'approved', '2024-08-20 18:25:09', '2024-08-20 18:25:34'),
(25, 21, '0xA7826BFa04CA346Fea2e7a50040696d1B80468Ef', 'xxxxx', '#ex3j3h2sh', '58', 510000.0000000, 'uploads/1724178383176.jpeg', 'approved', '2024-08-20 18:26:23', '2024-08-20 18:28:16'),
(33, 24, '0x8f42D13ad814A6772b16a5d6fB71cFe3608838B5', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '518', 20000.0000000, NULL, 'approved', '2024-08-22 13:54:14', '2024-08-22 13:54:43'),
(34, 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '518', 20000.0000000, NULL, 'approved', '2024-08-22 21:34:51', '2024-08-22 21:35:06'),
(35, 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '518', 2000.0000000, NULL, 'approved', '2024-08-23 21:19:37', '2024-08-23 21:20:06'),
(36, 20, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 200.0000000, NULL, 'approved', '2024-08-23 21:52:44', '2024-08-23 21:53:01'),
(37, 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 500.0000000, NULL, 'pending', '2024-08-24 04:35:02', '2024-08-24 04:35:02'),
(38, 30, '0xf82C36eBc18e55CDa2d9782bDaCB6B4Ff42f5031', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '#ex3j3h2sh', '90', 200000.0000000, NULL, 'approved', '2024-08-25 18:56:45', '2024-08-25 18:57:18');

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_referral_history`
--

CREATE TABLE `meta_ct_referral_history` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `user_by` int NOT NULL,
  `type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coin_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `percent` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `amount` decimal(65,7) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_referral_history`
--

INSERT INTO `meta_ct_referral_history` (`id`, `user_id`, `user_by`, `type`, `coin_id`, `percent`, `amount`, `created_at`, `updated_at`) VALUES
(1, 1, 2, 'referral', 'BTC', '10%', 0.1234567, '2024-08-10 04:30:13', '2024-08-10 04:30:13'),
(2, 2, 3, 'referral', 'ETH', '15%', 0.2345678, '2024-08-10 04:30:13', '2024-08-10 04:30:13'),
(3, 3, 4, 'referral', 'LTC', '5%', 0.3456789, '2024-08-10 04:30:13', '2024-08-10 04:30:13'),
(4, 4, 5, 'referral', 'XRP', '20%', 0.4567890, '2024-08-10 04:30:13', '2024-08-10 04:30:13'),
(5, 5, 1, 'referral', 'DOGE', '25%', 0.5678901, '2024-08-10 04:30:13', '2024-08-10 04:30:13');

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_trade_order`
--

CREATE TABLE `meta_ct_trade_order` (
  `id` int NOT NULL,
  `order_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `order_type` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `order_position` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `user_id` int NOT NULL,
  `user_wallet` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `wallet_coin_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `trade_coin_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `trade_coin_symbol` varchar(30) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `amount` decimal(65,2) NOT NULL,
  `wallet_amount` decimal(65,7) NOT NULL,
  `profit_amount` decimal(65,2) NOT NULL,
  `purchase_price` decimal(65,7) NOT NULL,
  `delivery_price` decimal(65,7) NOT NULL DEFAULT '0.0000000',
  `wallet_profit_amount` decimal(65,7) NOT NULL,
  `delivery_time` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `profit_level` int NOT NULL,
  `is_profit` tinyint(1) DEFAULT '1',
  `status` varchar(255) COLLATE utf8mb4_general_ci NOT NULL DEFAULT 'running',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_trade_order`
--

INSERT INTO `meta_ct_trade_order` (`id`, `order_id`, `order_type`, `order_position`, `user_id`, `user_wallet`, `wallet_coin_id`, `trade_coin_id`, `trade_coin_symbol`, `amount`, `wallet_amount`, `profit_amount`, `purchase_price`, `delivery_price`, `wallet_profit_amount`, `delivery_time`, `profit_level`, `is_profit`, `status`, `created_at`, `updated_at`) VALUES
(71, '133361', 'crypto', 'buy', 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '518', '36447', 'RUNE', 50.00, 0.0000000, 5.00, 4.3300000, 0.0000000, 61354.2000000, '60S', 10, 1, 'finished', '2024-08-23 17:47:43', '2024-08-23 17:48:43'),
(72, '792491', 'crypto', 'buy', 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '518', '90', 'BTC', 500.00, 0.0000000, 50.00, 63695.7800000, 0.0000000, 2198.5000000, '10S', 10, 0, 'finished', '2024-08-23 21:20:36', '2024-08-23 21:20:46'),
(73, '653678', 'crypto', 'buy', 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '518', '90', 'BTC', 500.00, 0.0000000, 50.00, 63696.3800000, 0.0000000, 2193.5000000, '10S', 10, 0, 'finished', '2024-08-23 21:21:02', '2024-08-23 21:21:12'),
(74, '906002', 'crypto', 'buy', 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '518', '90', 'BTC', 50.00, 0.0000000, 5.00, 64337.1900000, 0.0000000, 2188.5000000, '10S', 10, 1, 'finished', '2024-08-23 21:32:37', '2024-08-23 21:32:48'),
(75, '385829', 'crypto', 'buy', 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '518', '80', 'ETH', 500.00, 0.0000000, 50.00, 2767.3600000, 0.0000000, 2183.5000000, '10S', 10, 1, 'finished', '2024-08-23 21:32:54', '2024-08-23 21:33:04'),
(76, '396566', 'crypto', 'buy', 25, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', '518', '1', 'LTC', 50.00, 0.0000000, 5.00, 66.1400000, 0.0000000, 2188.5000000, '10S', 10, 1, 'finished', '2024-08-23 21:33:14', '2024-08-23 21:33:24'),
(77, '546141', 'crypto', 'buy', 20, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', '518', '2710', 'BNB', 200.00, 0.0000000, 20.00, 588.6000000, 0.0000000, 202.0000000, '10S', 10, 1, 'finished', '2024-08-23 21:51:14', '2024-08-23 21:51:24'),
(78, '648785', 'crypto', 'sell', 20, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', '518', '2710', 'BNB', 300.00, 0.0000000, 30.00, 589.0100000, 0.0000000, 182.0000000, '10S', 10, 1, 'finished', '2024-08-23 21:51:26', '2024-08-23 21:51:36'),
(79, '991346', 'crypto', 'buy', 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '518', '90', 'BTC', 50.00, 0.0000000, 5.00, 63929.7800000, 0.0000000, 61354.7000000, '60S', 10, 1, 'finished', '2024-08-24 04:11:45', '2024-08-24 04:12:45'),
(80, '793779', 'crypto', 'buy', 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '518', '90', 'BTC', 1000.00, 0.0000000, 350.00, 63926.2000000, 0.0000000, 214743.2000000, '120S', 35, 1, 'finished', '2024-08-24 04:26:21', '2024-08-24 04:28:21'),
(81, '666560', 'crypto', 'buy', 30, '0xf82C36eBc18e55CDa2d9782bDaCB6B4Ff42f5031', '518', '2713', 'TRX', 200.00, 0.0000000, 20.00, 0.1647250, 0.0000000, 20000.0000000, '10S', 10, 0, 'finished', '2024-08-25 18:58:11', '2024-08-25 18:58:21'),
(82, '716724', 'crypto', 'sell', 30, '0xf82C36eBc18e55CDa2d9782bDaCB6B4Ff42f5031', '518', '2321', 'BCH', 20000.00, 0.0000000, 2000.00, 359.6500000, 0.0000000, 19998.0000000, '60S', 10, 1, 'finished', '2024-08-25 18:59:07', '2024-08-25 19:00:07'),
(83, '519892', 'crypto', 'buy', 30, '0xf82C36eBc18e55CDa2d9782bDaCB6B4Ff42f5031', '518', '90', 'BTC', 200000.00, 0.0000000, 20000.00, 64131.1800000, 0.0000000, 20198.0000000, '60S', 10, 0, 'finished', '2024-08-25 19:01:15', '2024-08-25 19:02:16'),
(84, '598049', 'crypto', 'sell', 30, '0xf82C36eBc18e55CDa2d9782bDaCB6B4Ff42f5031', '518', '90', 'BTC', 1980.00, 5000.0000000, 198.00, 64131.1800000, 0.0000000, 198.0000000, '60S', 10, 0, 'finished', '2024-08-25 19:01:32', '2024-08-25 19:02:33');

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_user`
--

CREATE TABLE `meta_ct_user` (
  `id` int NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile` varchar(20) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_wallet` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `referral_uuid` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_referral` tinyint(1) DEFAULT '0',
  `balance` decimal(65,7) DEFAULT '0.0000000',
  `is_profit` tinyint(1) DEFAULT '0',
  `referral_bonus` decimal(65,2) DEFAULT '0.00',
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'active',
  `note` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `employee` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(50) COLLATE utf8mb4_general_ci DEFAULT 'user',
  `user_registered` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_user`
--

INSERT INTO `meta_ct_user` (`id`, `uuid`, `name`, `email`, `mobile`, `user_wallet`, `password`, `referral_uuid`, `is_referral`, `balance`, `is_profit`, `referral_bonus`, `status`, `note`, `employee`, `role`, `user_registered`) VALUES
(1, 'uuid-001', 'Alice Johnson', 'alice@example.com', NULL, 'wallet-001', NULL, NULL, 0, 1500.5000000, 1, 25.50, 'inactive', 'good', 'Fahim', 'user', '2023-07-31 18:00:00'),
(2, 'uuid-002', 'Bob Smith', 'bob@example.com', NULL, 'wallet-002', NULL, 'uuid-001', 1, 800.0000000, 1, 10.00, 'active', 'UK London', 'Sayem', 'user', '2023-08-01 18:00:00'),
(3, 'uuid-003', 'Charlie Brown', 'charlie@example.com', NULL, 'wallet-003', NULL, 'uuid-001', 1, 500.0000000, 0, 5.00, 'inactive', '', 'Fahim', 'user', '2023-08-02 18:00:00'),
(4, 'uuid-004', 'Diana Prince', 'diana@example.com', NULL, 'wallet-004', NULL, NULL, 0, 250.7500000, 0, 15.25, 'active', '', 'Sayem', 'user', '2023-08-03 18:00:00'),
(5, 'uuid-005', 'Evan Wright', 'evan@example.com', NULL, 'wallet-005', NULL, 'uuid-003', 1, 1000.0000000, 1, 50.00, 'active', NULL, NULL, 'user', '2023-08-04 18:00:00'),
(7, 'uuid-006', 'Shakil Johnson', 'shakil@example.com', NULL, 'wallet-006', 'pass1234', NULL, 0, 1500.5000000, 1, 25.50, 'active', NULL, NULL, 'admin', '2023-07-30 18:00:00'),
(8, 'uuid-1', 'John Doe', 'john.doe@example.com', '1234567890', 'wallet-1', 'password123', 'ref-uuid-1', 1, 1000.1234567, 1, 50.75, 'active', NULL, NULL, 'user', '2024-08-10 15:54:27'),
(9, 'uuid-2', 'Jane Smith', 'jane.smith@example.com', '0987654321', 'wallet-2', NULL, NULL, 0, 2000.4567890, 1, 100.50, 'active', NULL, NULL, 'user', '2024-08-10 15:54:27'),
(10, 'uuid-3', 'Bob Johnson', 'bob.johnson@example.com', '1122334455', 'wallet-3', 'securepassword', 'ref-uuid-3', 1, 3000.7890123, 0, 150.25, 'active', NULL, NULL, 'admin', '2024-08-10 15:54:27'),
(11, 'uuid-4', 'Alice Williams', NULL, '6677889900', 'wallet-4', NULL, NULL, 0, 4000.0123456, 1, 200.00, 'inactive', NULL, NULL, 'user', '2024-08-10 15:54:27'),
(12, 'uuid-5', 'Charlie Brown', 'charlie.brown@example.com', NULL, 'wallet-5', 'charlie123', 'ref-uuid-5', 1, 5000.3456789, 1, 250.75, 'active', NULL, NULL, 'user', '2024-08-10 15:54:27'),
(13, 'uuid-15', 'Sayem Johnson', 'sayem@example.com', '01782188292', 'wallet-3', 'pass1234', 'ref-uuid-3', 1, 3000.7890123, 0, 150.25, 'active', NULL, NULL, 'admin', '2024-08-10 17:12:04'),
(14, '893535', NULL, NULL, NULL, 'wallet-0012', NULL, NULL, 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'user', '2024-08-12 11:50:49'),
(15, '596758', NULL, NULL, NULL, '0x86eb00811D71d01f84bAfe926f78E3Db3035e5A0', NULL, '', 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'user', '2024-08-12 12:12:59'),
(16, '123e4567', 'John Doe', 'john.doe@example.com', NULL, '0xAbc123WalletAddress', NULL, 'referral-uuid-123', 0, 100.0000000, 1, 10.00, 'active', NULL, NULL, 'user', '2024-08-09 18:00:00'),
(17, '500584', 'Fahim', 'fahim@gmail.com', NULL, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', '$2b$10$zaqogVxLPHbcdkRFnxOX6.X1OkcNPYK4G4GlIbgxSEGdVLzWSfCCe', '', 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'superadmin', '2024-08-18 07:16:19'),
(18, '186544', NULL, NULL, NULL, '0x9Fc559f7925E4B8a5b35Bbd07B7994bBFEb29745', NULL, '', 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'user', '2024-08-20 08:58:36'),
(19, '531941', NULL, NULL, NULL, '0xF9108407EcaBe10A9eAAB92a5F1534C5144059A6', NULL, '', 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'user', '2024-08-20 10:41:37'),
(20, '653279', NULL, NULL, NULL, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', NULL, '', 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'user', '2024-08-20 10:56:27'),
(21, '715360', NULL, NULL, NULL, '0xA7826BFa04CA346Fea2e7a50040696d1B80468Ef', NULL, '', 0, 0.0000000, 0, 0.00, 'active', NULL, NULL, 'user', '2024-08-20 14:11:19'),
(22, '841996', '002', 'hvhv@gmail.com', '', '-', '$2b$10$8zTqKMhqrOYjUHwFSdB.AOzwb4F1NcUivFcKix232qlpDrk5li4hu', NULL, 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'superadmin', '2024-08-20 19:54:52'),
(23, '105461', 'Fahimtest', 'hosen@gmail.com', '', '-', '$2b$10$xu.h3cpMjjsE2OujM6WtsezX3fSA8hpxb/b45Ww4pIqXhuFYSZNTK', NULL, 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'admin', '2024-08-20 20:03:43'),
(24, '952823', NULL, NULL, NULL, '0x8f42D13ad814A6772b16a5d6fB71cFe3608838B5', NULL, '', 0, 0.0000000, 1, 0.00, 'active', NULL, NULL, 'user', '2024-08-22 11:41:18'),
(25, '682322', 'Febi', 'erere@gmail.com', NULL, '0xe09249c4CC760fE266D993AFb3Ce15b4F582EB84', NULL, '', 0, 0.0000000, 1, 0.00, 'active', 'Febi ID', NULL, 'user', '2024-08-22 21:34:23'),
(26, '958568', NULL, NULL, NULL, '0x4f9b9bc57feab849c789cdb46b72f220897e732f', NULL, '', 0, 0.0000000, 0, 0.00, 'active', NULL, NULL, 'user', '2024-08-23 09:59:32'),
(27, '205755', NULL, NULL, NULL, '0xc22fbb2f6b8e520fca49c56c91c2a4103c69fc55', NULL, '', 0, 0.0000000, 0, 0.00, 'active', NULL, NULL, 'user', '2024-08-23 21:03:01'),
(28, '835012', NULL, NULL, NULL, '0xd308ed63a865d410ea64121641a81622d536f6ef', NULL, '', 0, 0.0000000, 0, 0.00, 'active', NULL, NULL, 'user', '2024-08-23 21:25:55'),
(29, '961349', 'Jh Pintu', 'pintu@gmail.com', '01748284223', '-', '$2b$10$g43Bg8T4mf0WiIksFeOsze7LKUhyjj0NUU3/oH0uio4rGDIq5nEje', NULL, 0, 0.0000000, 0, 0.00, 'active', NULL, NULL, 'user', '2024-08-25 10:27:44'),
(30, '554498', NULL, NULL, NULL, '0xf82C36eBc18e55CDa2d9782bDaCB6B4Ff42f5031', NULL, '', 0, 0.0000000, 0, 0.00, 'active', NULL, NULL, 'user', '2024-08-25 18:55:37');

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_user_balance_meta`
--

CREATE TABLE `meta_ct_user_balance_meta` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `coin_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coin_amount` decimal(65,7) NOT NULL DEFAULT '0.0000000',
  `usd_amount` decimal(65,7) NOT NULL DEFAULT '0.0000000',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_user_balance_meta`
--

INSERT INTO `meta_ct_user_balance_meta` (`id`, `user_id`, `coin_id`, `coin_amount`, `usd_amount`, `created_at`, `updated_at`) VALUES
(2, 2, 'ETH', 1000.0000000, 3000.0000000, '2024-08-08 11:18:43', '2024-08-16 05:39:33'),
(3, 3, 'LTC', 1000.0000000, 200.0000000, '2024-08-08 11:18:43', '2024-08-16 05:39:33'),
(4, 4, 'XRP', 1000.0000000, 150.0000000, '2024-08-08 11:18:43', '2024-08-16 05:39:33'),
(5, 5, 'DOGE', 1000.0000000, 50.0000000, '2024-08-08 11:18:43', '2024-08-16 05:39:33'),
(6, 15, 'BTC', 1000.0000000, 0.0000000, '2024-08-13 10:29:30', '2024-08-16 05:39:33'),
(7, 15, 'ETH', 1000.0000000, 0.0000000, '2024-08-13 10:31:46', '2024-08-16 05:39:33'),
(8, 15, 'LTC', 1000.0000000, 0.0000000, '2024-08-13 10:34:26', '2024-08-16 05:39:33'),
(9, 15, 'DOGE', 1000.0000000, 0.0000000, '2024-08-13 10:34:55', '2024-08-16 05:39:33'),
(10, 15, 'XRP', 1000.0000000, 0.0000000, '2024-08-13 10:37:31', '2024-08-16 05:39:33'),
(11, 15, '90', 0.0000000, 1500.0000000, '2024-08-13 10:46:56', '2024-08-22 11:45:26'),
(12, 15, '80', 0.0000000, 210.0000000, '2024-08-13 11:47:38', '2024-08-20 15:30:09'),
(13, 15, '58', 0.0000000, 0.0000000, '2024-08-15 17:46:39', '2024-08-22 11:45:50'),
(14, 17, '90', 0.0000000, 0.0000000, '2024-08-18 07:16:19', '2024-08-24 03:11:59'),
(15, 17, '80', 0.0000000, 0.0000000, '2024-08-18 07:16:19', '2024-08-22 07:16:02'),
(16, 17, '58', 0.0000000, 0.0000000, '2024-08-18 07:16:19', '2024-08-18 07:16:19'),
(17, 14, '90', 0.0000000, 0.0000000, '2024-08-20 05:10:37', '2024-08-20 05:10:37'),
(18, 14, '80', 0.0000000, 0.0000000, '2024-08-20 05:10:37', '2024-08-20 05:10:37'),
(19, 17, '48543', 0.0000000, 0.0000000, '2024-08-20 05:27:29', '2024-08-20 05:27:29'),
(20, 17, '518', 613902.0000000, 0.0000000, '2024-08-20 05:27:29', '2024-08-24 04:28:21'),
(21, 15, '518', 1000.0000000, 0.0000000, '2024-08-20 08:57:37', '2024-08-22 11:45:51'),
(22, 12, '90', 0.0000000, 0.0000000, '2024-08-20 08:58:35', '2024-08-20 08:58:35'),
(23, 12, '80', 0.0000000, 0.0000000, '2024-08-20 08:58:35', '2024-08-20 08:58:35'),
(24, 12, '518', 0.0000000, 0.0000000, '2024-08-20 08:58:35', '2024-08-20 08:58:35'),
(25, 18, '90', 0.0000000, 0.0000000, '2024-08-20 08:58:36', '2024-08-22 10:30:26'),
(26, 18, '80', 50000.0000000, 0.0000000, '2024-08-20 08:58:36', '2024-08-22 10:30:26'),
(27, 18, '518', 50205.0000000, 0.0000000, '2024-08-20 08:58:36', '2024-08-22 10:33:34'),
(28, 19, '90', 0.0000000, 0.0000000, '2024-08-20 10:41:43', '2024-08-20 11:07:57'),
(29, 19, '80', 5000000.0000000, 0.0000000, '2024-08-20 10:41:43', '2024-08-20 11:05:25'),
(30, 19, '518', 0.0000000, 0.0000000, '2024-08-20 10:41:43', '2024-08-20 10:41:43'),
(31, 20, '90', 9.0000000, 0.0000000, '2024-08-20 10:56:30', '2024-08-24 06:25:58'),
(32, 20, '80', 2555.0000000, 0.0000000, '2024-08-20 10:56:30', '2024-08-22 14:02:57'),
(33, 20, '518', 1850.0000000, 0.0000000, '2024-08-20 10:56:30', '2024-08-23 21:51:37'),
(34, 21, '90', 0.0000000, 0.0000000, '2024-08-20 14:11:22', '2024-08-20 14:11:22'),
(35, 21, '80', 19998.0000000, 0.0000000, '2024-08-20 14:11:22', '2024-08-20 20:06:52'),
(36, 21, '518', 2468310.0000000, 0.0000000, '2024-08-20 14:11:22', '2024-08-23 16:59:21'),
(37, 1, '90', 0.0000000, 0.0000000, '2024-08-20 18:11:17', '2024-08-20 18:11:17'),
(38, 1, '80', 0.0000000, 0.0000000, '2024-08-20 18:11:17', '2024-08-20 18:11:17'),
(39, 1, '518', 0.0000000, 0.0000000, '2024-08-20 18:11:17', '2024-08-20 18:11:17'),
(40, 2, '90', 0.0000000, 0.0000000, '2024-08-20 18:11:24', '2024-08-20 18:11:24'),
(41, 2, '80', 0.0000000, 0.0000000, '2024-08-20 18:11:24', '2024-08-20 18:11:24'),
(42, 2, '518', 0.0000000, 0.0000000, '2024-08-20 18:11:24', '2024-08-20 18:11:24'),
(43, 21, '58', 60.0000000, 0.0000000, '2024-08-20 18:24:37', '2024-08-20 19:59:22'),
(44, 18, '58', 0.0000000, 0.0000000, '2024-08-20 19:23:17', '2024-08-20 19:23:17'),
(45, 1, '58', 0.0000000, 0.0000000, '2024-08-20 19:50:07', '2024-08-20 19:50:07'),
(46, 2, '58', 0.0000000, 0.0000000, '2024-08-20 19:52:31', '2024-08-20 19:52:31'),
(47, 11, '90', 0.0000000, 0.0000000, '2024-08-20 19:52:43', '2024-08-20 19:52:43'),
(48, 11, '80', 0.0000000, 0.0000000, '2024-08-20 19:52:43', '2024-08-20 19:52:43'),
(49, 11, '518', 0.0000000, 0.0000000, '2024-08-20 19:52:43', '2024-08-20 19:52:43'),
(50, 11, '58', 0.0000000, 0.0000000, '2024-08-20 19:52:43', '2024-08-20 19:52:43'),
(51, 22, '90', 0.0000000, 0.0000000, '2024-08-20 19:58:25', '2024-08-20 19:58:25'),
(52, 22, '80', 0.0000000, 0.0000000, '2024-08-20 19:58:25', '2024-08-20 19:58:25'),
(53, 22, '518', 0.0000000, 0.0000000, '2024-08-20 19:58:25', '2024-08-20 19:58:25'),
(54, 22, '58', 0.0000000, 0.0000000, '2024-08-20 19:58:25', '2024-08-20 19:58:25'),
(55, 13, '90', 0.0000000, 0.0000000, '2024-08-20 19:58:52', '2024-08-20 19:58:52'),
(56, 13, '80', 0.0000000, 0.0000000, '2024-08-20 19:58:52', '2024-08-20 19:58:52'),
(57, 13, '518', 0.0000000, 0.0000000, '2024-08-20 19:58:52', '2024-08-20 19:58:52'),
(58, 13, '58', 0.0000000, 0.0000000, '2024-08-20 19:58:52', '2024-08-20 19:58:52'),
(59, 7, '90', 0.0000000, 0.0000000, '2024-08-20 20:01:56', '2024-08-20 20:01:56'),
(60, 7, '80', 0.0000000, 0.0000000, '2024-08-20 20:01:56', '2024-08-20 20:01:56'),
(61, 7, '518', 0.0000000, 0.0000000, '2024-08-20 20:01:56', '2024-08-20 20:01:56'),
(62, 7, '58', 0.0000000, 0.0000000, '2024-08-20 20:01:56', '2024-08-20 20:01:56'),
(63, 19, '58', 0.0000000, 0.0000000, '2024-08-21 17:53:56', '2024-08-21 17:53:56'),
(64, 20, '58', 0.0000000, 0.0000000, '2024-08-21 21:36:39', '2024-08-21 21:36:39'),
(65, 24, '518', 20030.0000000, 0.0000000, '2024-08-22 11:41:18', '2024-08-23 17:05:47'),
(66, 24, '90', 0.0000000, 0.0000000, '2024-08-22 11:41:18', '2024-08-22 11:41:18'),
(67, 24, '80', 0.0000000, 0.0000000, '2024-08-22 11:41:18', '2024-08-22 13:58:46'),
(68, 24, '518', 20030.0000000, 0.0000000, '2024-08-22 11:41:18', '2024-08-23 17:05:47'),
(69, 24, '58', 0.0000000, 0.0000000, '2024-08-22 11:41:18', '2024-08-22 11:41:18'),
(70, 25, '90', 0.0000000, 0.0000000, '2024-08-22 21:34:24', '2024-08-22 21:34:24'),
(71, 25, '518', 21890.0000000, 0.0000000, '2024-08-22 21:34:24', '2024-08-23 21:33:24'),
(72, 25, '80', 0.0000000, 0.0000000, '2024-08-22 21:34:24', '2024-08-22 21:34:24'),
(73, 25, '518', 21890.0000000, 0.0000000, '2024-08-22 21:34:24', '2024-08-23 21:33:24'),
(74, 25, '58', 0.0000000, 0.0000000, '2024-08-22 21:34:24', '2024-08-22 21:34:24'),
(75, 14, '518', 0.0000000, 0.0000000, '2024-08-23 05:39:29', '2024-08-23 05:39:29'),
(76, 14, '518', 0.0000000, 0.0000000, '2024-08-23 05:39:29', '2024-08-23 05:39:29'),
(77, 14, '58', 0.0000000, 0.0000000, '2024-08-23 05:39:29', '2024-08-23 05:39:29'),
(78, 28, '90', 0.0000000, 0.0000000, '2024-08-23 21:25:57', '2024-08-23 21:25:57'),
(79, 28, '80', 0.0000000, 0.0000000, '2024-08-23 21:25:57', '2024-08-23 21:25:57'),
(80, 28, '518', 0.0000000, 0.0000000, '2024-08-23 21:25:57', '2024-08-23 21:25:57'),
(81, 28, '58', 0.0000000, 0.0000000, '2024-08-23 21:25:57', '2024-08-23 21:25:57'),
(82, 25, '2', 0.0000000, 0.0000000, '2024-08-23 21:32:01', '2024-08-23 21:32:01'),
(83, 20, '2', 0.0000000, 0.0000000, '2024-08-23 21:50:49', '2024-08-23 21:50:49'),
(84, 1, '2', 0.0000000, 0.0000000, '2024-08-24 03:00:51', '2024-08-24 03:00:51'),
(85, 17, '2', 0.0000000, 0.0000000, '2024-08-24 03:03:39', '2024-08-24 03:03:39'),
(86, 2, '2', 0.0000000, 0.0000000, '2024-08-24 03:08:21', '2024-08-24 03:08:21'),
(87, 3, '90', 0.0000000, 0.0000000, '2024-08-24 03:08:31', '2024-08-24 03:08:31'),
(88, 3, '80', 0.0000000, 0.0000000, '2024-08-24 03:08:31', '2024-08-24 03:08:31'),
(89, 3, '518', 0.0000000, 0.0000000, '2024-08-24 03:08:31', '2024-08-24 03:08:31'),
(90, 3, '58', 0.0000000, 0.0000000, '2024-08-24 03:08:31', '2024-08-24 03:08:31'),
(91, 3, '2', 0.0000000, 0.0000000, '2024-08-24 03:08:31', '2024-08-24 03:08:31'),
(92, 4, '90', 0.0000000, 0.0000000, '2024-08-24 03:08:43', '2024-08-24 03:08:43'),
(93, 4, '80', 0.0000000, 0.0000000, '2024-08-24 03:08:43', '2024-08-24 03:08:43'),
(94, 4, '518', 0.0000000, 0.0000000, '2024-08-24 03:08:43', '2024-08-24 03:08:43'),
(95, 4, '58', 0.0000000, 0.0000000, '2024-08-24 03:08:43', '2024-08-24 03:08:43'),
(96, 4, '2', 0.0000000, 0.0000000, '2024-08-24 03:08:43', '2024-08-24 03:08:43'),
(97, 18, '2', 0.0000000, 0.0000000, '2024-08-24 03:17:39', '2024-08-24 03:17:39'),
(98, 19, '2', 0.0000000, 0.0000000, '2024-08-25 08:35:08', '2024-08-25 08:35:08'),
(99, 30, '90', 0.0000000, 0.0000000, '2024-08-25 18:55:45', '2024-08-25 18:57:39'),
(100, 30, '80', 0.0000000, 0.0000000, '2024-08-25 18:55:45', '2024-08-25 18:55:45'),
(101, 30, '518', 181782.0000000, 0.0000000, '2024-08-25 18:55:45', '2024-08-25 19:02:33'),
(102, 30, '58', 0.0000000, 0.0000000, '2024-08-25 18:55:45', '2024-08-25 18:55:45'),
(103, 30, '2', 0.0000000, 0.0000000, '2024-08-25 18:55:45', '2024-08-25 18:55:45');

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_wallets`
--

CREATE TABLE `meta_ct_wallets` (
  `id` int NOT NULL,
  `coin_id` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coin_name` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coin_logo` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `wallet_network` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `coin_symbol` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `wallet_address` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `wallet_qr` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'active',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_wallets`
--

INSERT INTO `meta_ct_wallets` (`id`, `coin_id`, `coin_name`, `coin_logo`, `wallet_network`, `coin_symbol`, `wallet_address`, `wallet_qr`, `status`, `created_at`, `updated_at`) VALUES
(17, '90', 'Bitcoin', '', 'bitcoin', 'BTC', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', 'uploads/1724143713916.webp', 'active', '2024-08-20 04:00:43', '2024-08-20 08:48:33'),
(19, '80', 'Ethereum', '', 'ethereum', 'ETH', 'fahimCdC9f2E68629FDdF2B53E3eE4403CD16934962', 'uploads/1724143734565.webp', 'active', '2024-08-20 04:20:13', '2024-08-20 08:48:54'),
(22, '518', 'Tether', '', 'tether', 'USDT', '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', 'uploads/1724143761708.webp', 'active', '2024-08-20 08:49:21', '2024-08-20 08:49:21'),
(23, '58', 'XRP', 'C:\\fakepath\\download.jpg', 'ripple', 'XRP', 'xxxxx', 'uploads/1724178246076.jpg', 'active', '2024-08-20 18:24:06', '2024-08-20 18:24:06'),
(24, '2', 'Dogecoin', '', 'dogecoin', 'DOGE', '0xe09249c4CC76 0fE266D993AFb3 Ce15b4F582EB84', 'uploads/1724448712105.png', 'active', '2024-08-23 21:31:52', '2024-08-23 21:31:52');

-- --------------------------------------------------------

--
-- Table structure for table `meta_ct_withdraws`
--

CREATE TABLE `meta_ct_withdraws` (
  `id` int NOT NULL,
  `user_id` int NOT NULL,
  `wallet_from` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `wallet_to` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `trans_hash` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `coin_id` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `amount` decimal(65,7) NOT NULL,
  `documents` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'pending',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `meta_ct_withdraws`
--

INSERT INTO `meta_ct_withdraws` (`id`, `user_id`, `wallet_from`, `wallet_to`, `trans_hash`, `coin_id`, `amount`, `documents`, `status`, `created_at`, `updated_at`) VALUES
(1, 1, 'wallet-006', 'wallet-1001', 'hash-101', 'BTC', 0.2000000, 'doc-101', 'completed', '2024-08-08 11:02:03', '2024-08-08 11:12:42'),
(2, 2, 'wallet-002', 'wallet-1002', 'hash-102', 'ETH', 1.5000000, 'doc-102', 'pending', '2024-08-08 11:02:03', '2024-08-08 11:02:03'),
(3, 3, 'wallet-003', 'wallet-1003', 'hash-103', 'USDT', 50.0000000, 'doc-103', 'completed', '2024-08-08 11:02:03', '2024-08-08 11:02:03'),
(4, 4, 'wallet-004', 'wallet-1004', 'hash-104', 'BTC', 40.0000000, 'doc-104', 'approved', '2024-08-08 11:02:03', '2024-08-18 06:14:48'),
(5, 5, 'wallet-005', 'wallet-1005', 'hash-105', 'LTC', 5.0000000, 'doc-105', 'completed', '2024-08-08 11:02:03', '2024-08-08 11:02:03'),
(29, 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', 'ewrwerewfrdfsfdfadsfdsf', '', '518', 300.0000000, NULL, 'pending', '2024-08-22 12:32:46', '2024-08-22 12:32:46'),
(31, 20, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', 'Gffghhhhhhh', 'Ggg', '90', 12099534.0000000, NULL, 'approved', '2024-08-22 14:18:01', '2024-08-22 14:18:35'),
(32, 17, '0x27CdC9f2E68629FDdF2B53E3eE4403CD16934962', 'ewrwerewfrdfsfdfadsfdsf', '', '90', 4.0000000, NULL, 'pending', '2024-08-24 03:11:58', '2024-08-24 03:11:58'),
(33, 20, '0xD730f4C700680819dd2AEFA9460C81B1b2e4654F', 'Fttttgg', '', '90', 200.0000000, NULL, 'pending', '2024-08-24 06:25:58', '2024-08-24 06:25:58');

-- --------------------------------------------------------

--
-- Table structure for table `settings`
--

CREATE TABLE `settings` (
  `id` int NOT NULL,
  `referral_registration_status` varchar(25) DEFAULT NULL,
  `referral_registration_bonus` decimal(10,2) DEFAULT NULL,
  `referral_deposit_bonus_status` enum('enabled','disabled') DEFAULT NULL,
  `referral_deposit_bonus` decimal(10,2) DEFAULT NULL,
  `trade_amount_limit` decimal(10,2) DEFAULT NULL,
  `deposit_limit` decimal(10,2) DEFAULT NULL,
  `withdrawal_limit` decimal(10,2) DEFAULT NULL,
  `whatsapp` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `smart_contract_link` varchar(255) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- --------------------------------------------------------

--
-- Table structure for table `timer_profits`
--

CREATE TABLE `timer_profits` (
  `id` int NOT NULL,
  `timer` varchar(10) NOT NULL,
  `profit` decimal(10,0) NOT NULL,
  `mini_usdt` decimal(10,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `timer_profits`
--

INSERT INTO `timer_profits` (`id`, `timer`, `profit`, `mini_usdt`) VALUES
(1, '60S', 10, 10),
(2, '120S', 35, 1000),
(3, '12H', 87, 10000),
(4, '36H', 205, 50000),
(5, '7D', 305, 100000),
(6, '1M', 350, 1000000),
(8, '10S', 10, 10);

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int NOT NULL,
  `uuid` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `user_wallet` varchar(255) COLLATE utf8mb4_general_ci NOT NULL,
  `referral_uuid` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `is_referral` tinyint(1) DEFAULT '0',
  `balance` decimal(65,7) DEFAULT '0.0000000',
  `is_profit` tinyint(1) DEFAULT '1',
  `referral_bonus` decimal(65,2) DEFAULT '0.00',
  `status` varchar(20) COLLATE utf8mb4_general_ci DEFAULT 'active',
  `user_registered` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `meta_ct_deposits`
--
ALTER TABLE `meta_ct_deposits`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `meta_ct_referral_history`
--
ALTER TABLE `meta_ct_referral_history`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meta_ct_trade_order`
--
ALTER TABLE `meta_ct_trade_order`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meta_ct_user`
--
ALTER TABLE `meta_ct_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuid` (`uuid`);

--
-- Indexes for table `meta_ct_user_balance_meta`
--
ALTER TABLE `meta_ct_user_balance_meta`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meta_ct_wallets`
--
ALTER TABLE `meta_ct_wallets`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `meta_ct_withdraws`
--
ALTER TABLE `meta_ct_withdraws`
  ADD PRIMARY KEY (`id`),
  ADD KEY `user_id` (`user_id`);

--
-- Indexes for table `settings`
--
ALTER TABLE `settings`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `timer_profits`
--
ALTER TABLE `timer_profits`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uuid` (`uuid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `meta_ct_deposits`
--
ALTER TABLE `meta_ct_deposits`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `meta_ct_referral_history`
--
ALTER TABLE `meta_ct_referral_history`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `meta_ct_trade_order`
--
ALTER TABLE `meta_ct_trade_order`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=85;

--
-- AUTO_INCREMENT for table `meta_ct_user`
--
ALTER TABLE `meta_ct_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `meta_ct_user_balance_meta`
--
ALTER TABLE `meta_ct_user_balance_meta`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=104;

--
-- AUTO_INCREMENT for table `meta_ct_wallets`
--
ALTER TABLE `meta_ct_wallets`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `meta_ct_withdraws`
--
ALTER TABLE `meta_ct_withdraws`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;

--
-- AUTO_INCREMENT for table `settings`
--
ALTER TABLE `settings`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `timer_profits`
--
ALTER TABLE `timer_profits`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meta_ct_deposits`
--
ALTER TABLE `meta_ct_deposits`
  ADD CONSTRAINT `meta_ct_deposits_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `meta_ct_user` (`id`);

--
-- Constraints for table `meta_ct_withdraws`
--
ALTER TABLE `meta_ct_withdraws`
  ADD CONSTRAINT `meta_ct_withdraws_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `meta_ct_user` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
