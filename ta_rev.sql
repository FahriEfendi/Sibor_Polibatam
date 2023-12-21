-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2023 at 09:27 AM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.0.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ta_rev`
--

-- --------------------------------------------------------

--
-- Table structure for table `borrow_room_audit`
--

CREATE TABLE `borrow_room_audit` (
  `id` int(11) NOT NULL,
  `uuid` char(100) NOT NULL,
  `nama_kegiatan` char(100) NOT NULL,
  `ruangan` int(50) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `dosen_student_id` int(11) DEFAULT NULL,
  `dosen_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `borrow_date` date NOT NULL,
  `borrow_time` time NOT NULL,
  `until_date` date NOT NULL,
  `until_time` time NOT NULL,
  `note` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` char(36) DEFAULT NULL,
  `updateBy` char(36) DEFAULT NULL,
  `nama_pengguna` varchar(225) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `roomId` int(11) NOT NULL,
  `roombmnid` int(11) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `jumlah_pengguna` int(11) NOT NULL,
  `barang` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrow_room_audit`
--

INSERT INTO `borrow_room_audit` (`id`, `uuid`, `nama_kegiatan`, `ruangan`, `userId`, `dosen_student_id`, `dosen_id`, `status`, `borrow_date`, `borrow_time`, `until_date`, `until_time`, `note`, `createdAt`, `updatedAt`, `createBy`, `updateBy`, `nama_pengguna`, `phone`, `roomId`, `roombmnid`, `nama`, `email`, `jumlah_pengguna`, `barang`) VALUES
(78, 'dddeaa03-fd0e-4b1f-b6b1-7e3b75a8fba0', 'Rapat', 1, 29, NULL, 12, 4, '2023-12-13', '07:00:00', '2023-12-13', '10:00:00', '', '2023-12-13 13:23:03', '2023-12-13 13:23:03', 'ba0f6531-f666-4547-a552-36728e95a1ea', NULL, 'Fahri Efendi', '089649995236', 0, 0, 'Fahri Efendi', 'testemailsi0712@gmail.com', 50, 'Videotron ,kursi sofa 4');

-- --------------------------------------------------------

--
-- Table structure for table `borrow_room_el`
--

CREATE TABLE `borrow_room_el` (
  `id` int(11) NOT NULL,
  `uuid` char(100) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `nama_kegiatan` char(100) NOT NULL,
  `email` varchar(225) NOT NULL,
  `ruangan` int(50) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `dosen_student_id` int(11) DEFAULT NULL,
  `dosen_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `borrow_date` date NOT NULL,
  `borrow_time` time NOT NULL,
  `until_date` date NOT NULL,
  `until_time` time NOT NULL,
  `note` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` char(36) DEFAULT NULL,
  `updateBy` char(36) DEFAULT NULL,
  `nama_pengguna` varchar(225) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `roomId` int(11) NOT NULL,
  `roomelId` int(11) NOT NULL,
  `jumlah_pengguna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `borrow_room_if`
--

CREATE TABLE `borrow_room_if` (
  `id` int(11) NOT NULL,
  `uuid` char(100) NOT NULL,
  `nama_peminjam` varchar(255) NOT NULL,
  `nama_kegiatan` char(100) NOT NULL,
  `ruangan` int(11) NOT NULL,
  `sesi` int(11) DEFAULT NULL,
  `nama_pengguna` varchar(225) NOT NULL,
  `phone` varchar(20) NOT NULL,
  `userId` int(11) NOT NULL,
  `dosen_student_id` int(11) DEFAULT NULL,
  `dosen_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `borrow_date` date NOT NULL,
  `until_date` date NOT NULL,
  `note` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` char(36) DEFAULT NULL,
  `updateBy` char(36) DEFAULT NULL,
  `roomId` int(11) DEFAULT NULL,
  `sesiIfId` int(11) DEFAULT NULL,
  `email` varchar(225) NOT NULL,
  `jumlah_pengguna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `borrow_room_if`
--

INSERT INTO `borrow_room_if` (`id`, `uuid`, `nama_peminjam`, `nama_kegiatan`, `ruangan`, `sesi`, `nama_pengguna`, `phone`, `userId`, `dosen_student_id`, `dosen_id`, `status`, `borrow_date`, `until_date`, `note`, `createdAt`, `updatedAt`, `createBy`, `updateBy`, `roomId`, `sesiIfId`, `email`, `jumlah_pengguna`) VALUES
(195, '809f2b7c-b571-4bec-a3e9-e2a28e444161', 'Fahri Efendi', 'Rapat pkm 2023', 1, 1, 'Fahri Efendi', '089649995236', 29, NULL, 12, 4, '2023-12-14', '2023-12-14', '', '2023-12-14 04:45:49', '2023-12-14 04:59:20', 'ba0f6531-f666-4547-a552-36728e95a1ea', 'ba0f6531-f666-4547-a552-36728e95a1ea', NULL, NULL, 'testemailsi0712@gmail.com', 5),
(196, 'd579b7a7-66e8-4e45-8149-b068c825c819', 'Fahri Efendi', 'rapat', 1, 1, 'Fahri Efendi', '089649995236', 29, NULL, 12, 0, '2023-12-14', '2023-12-14', '', '2023-12-14 04:58:10', '2023-12-14 04:58:10', 'ba0f6531-f666-4547-a552-36728e95a1ea', NULL, NULL, NULL, 'testemailsi0712@gmail.com', 5);

-- --------------------------------------------------------

--
-- Table structure for table `borrow_room_mb`
--

CREATE TABLE `borrow_room_mb` (
  `id` int(11) NOT NULL,
  `uuid` char(100) NOT NULL,
  `nama_kegiatan` char(100) NOT NULL,
  `ruangan` int(50) DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `dosen_student_id` int(11) DEFAULT NULL,
  `dosen_id` int(11) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  `borrow_date` date NOT NULL,
  `borrow_time` time NOT NULL,
  `until_date` date NOT NULL,
  `until_time` time NOT NULL,
  `note` text NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` char(36) DEFAULT NULL,
  `updateBy` char(36) DEFAULT NULL,
  `nama_pengguna` varchar(225) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `roomId` int(11) NOT NULL,
  `roommbid` int(11) NOT NULL,
  `nama` varchar(225) NOT NULL,
  `email` varchar(225) NOT NULL,
  `jumlah_pengguna` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `jurusan`
--

CREATE TABLE `jurusan` (
  `id` int(11) NOT NULL,
  `nama` char(100) NOT NULL,
  `slug` char(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `jurusan`
--

INSERT INTO `jurusan` (`id`, `nama`, `slug`, `createdAt`, `updateAt`) VALUES
(1, 'Teknik Informatika', 'teknik Informatika', '2023-07-04 06:57:07', '2023-07-04 06:57:07'),
(2, 'Teknik Mesin', 'teknik Mesin', '2023-07-04 06:57:26', '2023-07-04 06:57:26'),
(3, 'Manajemen Bisnis', 'manajemen bisnis', '2023-07-08 19:55:21', '2023-07-08 19:55:21'),
(4, 'Teknik Elektro', 'teknik elektro', '2023-07-08 19:55:35', '2023-07-08 19:55:35'),
(5, 'Admin', 'admin', '2023-09-13 09:45:49', '2023-09-13 09:45:49');

-- --------------------------------------------------------

--
-- Table structure for table `prodi`
--

CREATE TABLE `prodi` (
  `id` int(11) NOT NULL,
  `nama` char(100) NOT NULL,
  `slug` char(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `prodi`
--

INSERT INTO `prodi` (`id`, `nama`, `slug`, `createdAt`, `updateAt`) VALUES
(1, 'Akuntansi', 'akuntansi', '2023-07-10 06:08:21', '2023-07-10 06:08:21'),
(2, 'Akuntansi Manajerial\r\n', 'akuntansi manajerial\r\n', '2023-07-10 06:09:15', '2023-07-10 06:09:15'),
(3, 'Administrasi Bisnis Terapan\r\n', 'administrasi bisnis terapan\r\n', '2023-07-10 06:09:47', '2023-07-10 06:09:47'),
(4, 'Business Administration (International Class)\r\n', 'business administration (international class)\r\n', '2023-07-10 06:10:12', '2023-07-10 06:10:12'),
(5, 'Logistik Perdagangan Internasional\r\n', 'logistik perdagangan internasional\r\n', '2023-07-10 06:10:31', '2023-07-10 06:10:31'),
(6, 'Teknik Elektronika\r\n', 'teknik elektronika\r\n', '2023-07-10 07:05:43', '2023-07-10 07:05:43'),
(7, 'Teknik Elektronika Manufaktur\r\n', 'teknik elektronika manufaktur\r\n', '2023-07-10 07:06:06', '2023-07-10 07:06:06'),
(8, 'Teknik Instrumentasi\r\n', 'teknik instrumentasi\r\n', '2023-07-10 07:06:25', '2023-07-10 07:06:25'),
(9, 'Teknik Mekatronika\r\n', 'teknik mekatronika\r\n', '2023-07-10 07:06:40', '2023-07-10 07:06:40'),
(10, 'Teknik Robotika\r\n', 'teknik robotika\r\n', '2023-07-10 07:06:56', '2023-07-10 07:06:56'),
(11, 'Teknologi Rekayasa Pembangkit Energi\r\n', 'teknologi rekayasa pembangkit energi\r\n', '2023-07-10 07:07:06', '2023-07-10 07:07:06'),
(12, 'Teknik Informatika\r\n', 'teknik informatika\r\n', '2023-07-10 07:07:24', '2023-07-10 07:07:24'),
(13, 'Teknik Geomatika\r\n', 'teknik geomatika\r\n', '2023-07-10 07:07:39', '2023-07-10 07:07:39'),
(14, 'Animasi', 'animasi', '2023-07-10 07:07:53', '2023-07-10 07:07:53'),
(15, 'Teknik Multimedia dan Jaringan\r\n', 'teknik multimedia dan jaringan\r\n', '2023-07-10 07:08:02', '2023-07-10 07:08:02'),
(16, 'Rekayasa Keamanan Siber\r\n', 'rekayasa keamanan siber\r\n', '2023-07-10 07:08:14', '2023-07-10 07:08:14'),
(17, 'Teknik Mesin\r\n', 'teknik mesin\r\n', '2023-07-10 07:08:27', '2023-07-10 07:08:27'),
(18, 'Teknik Perencanaan dan Konstruksi Kapal\r\n', 'teknik perencanaan dan konstruksi kapal\r\n', '2023-07-10 07:08:43', '2023-07-10 07:08:43'),
(19, 'Teknik Perawatan Pesawat Udara\r\n', 'teknik perawatan pesawat udara\r\n', '2023-07-10 07:09:03', '2023-07-10 07:09:03');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `id` int(11) NOT NULL,
  `nama` char(100) NOT NULL,
  `slug` char(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updateAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`id`, `nama`, `slug`, `createdAt`, `updateAt`) VALUES
(1, 'Admin', 'admin', '2023-07-04 06:18:01', '2023-07-04 06:18:01'),
(2, 'Mahasiswa', 'mahasiswa', '2023-07-04 06:52:26', '2023-07-04 06:52:26'),
(3, 'BMN', 'bmn', '2023-07-04 06:52:45', '2023-07-04 06:52:45'),
(4, 'Dosen', 'dosen', '2023-07-04 06:53:01', '2023-07-04 06:53:01'),
(5, 'Tata Usaha', 'tata usaha', '2023-07-04 07:31:03', '2023-07-04 07:31:03'),
(6, 'PAMDAL', 'pamdal', '2023-07-04 15:58:05', '2023-07-04 15:58:05'),
(7, 'Kalab', 'kalab', '2023-09-12 14:45:29', '2023-09-12 14:45:29'),
(8, 'PIC Lab', 'pic', '2023-09-12 14:59:50', '2023-09-12 14:59:50'),
(9, 'Ketua BMN', 'ketua bmn', '2023-09-25 09:17:54', '2023-09-25 09:17:54');

-- --------------------------------------------------------

--
-- Table structure for table `room`
--

CREATE TABLE `room` (
  `id` int(11) NOT NULL,
  `ruangan` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `max_people` int(11) NOT NULL,
  `notes` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room`
--

INSERT INTO `room` (`id`, `ruangan`, `status`, `max_people`, `notes`, `createdAt`, `updatedAt`) VALUES
(1, '601 - Workspace Multimedia', 0, 10, '', NULL, NULL),
(2, '601 - Workspace Virtual Reality', 0, 10, '', NULL, NULL),
(3, '604 - Workspace Multimedia', 0, 10, '', NULL, NULL),
(4, '606 - Workspace Rendering', 0, 10, '', NULL, NULL),
(5, '607 - Lab Motion Capture', 0, 20, '', NULL, NULL),
(6, '608 - Workspace Rendering', 0, 10, '', NULL, NULL),
(7, '702 - Lab Komputer/Praktikum', 0, 10, '', NULL, NULL),
(8, '704 - Workspace Software Development', 0, 10, '', NULL, NULL),
(9, '705 - Workspace Animation Production', 0, 10, '', NULL, NULL),
(10, '706 - Workspace Software Development', 0, 20, '', NULL, NULL),
(11, '707 - Workspace Creative Art Studio', 0, 10, '', NULL, NULL),
(12, '805 - Workspace Data Science', 0, 10, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_bmn`
--

CREATE TABLE `room_bmn` (
  `id` int(11) NOT NULL,
  `ruangan` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `max_people` int(11) NOT NULL,
  `notes` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_bmn`
--

INSERT INTO `room_bmn` (`id`, `ruangan`, `status`, `max_people`, `notes`, `createdAt`, `updatedAt`) VALUES
(1, 'Auditorium', 0, 100, '', NULL, NULL),
(2, 'R104 - Computer Laboratory ', 0, 20, '', NULL, NULL),
(3, 'R401 - Basic Electronics laboratory ', 0, 20, '', NULL, NULL),
(4, 'R402 - WorkSpace', 0, 20, '', NULL, NULL),
(5, 'R404 - Networking Laboratory (NWL)', 0, 20, '', NULL, NULL),
(6, 'R405 - Basic Electronics laboratory', 0, 20, '', NULL, NULL),
(7, 'R406 - Basic Electronics laboratory', 0, 20, '', NULL, NULL),
(8, 'R501 - Interfacing Laboratory (IFL)', 0, 20, '', NULL, NULL),
(9, 'R502 - Advance Electronics laboratory (AEL)', 0, 20, '', NULL, NULL),
(10, 'R506 - Pneumatic Laboratory', 0, 20, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_el`
--

CREATE TABLE `room_el` (
  `id` int(11) NOT NULL,
  `ruangan` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `max_people` int(11) NOT NULL,
  `notes` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_el`
--

INSERT INTO `room_el` (`id`, `ruangan`, `status`, `max_people`, `notes`, `createdAt`, `updatedAt`) VALUES
(1, 'R102 - Mechanical Laboratory', 0, 20, '', NULL, NULL),
(2, 'R104 - Computer Laboratory ', 0, 20, '', NULL, NULL),
(3, 'R401 - Basic Electronics laboratory ', 0, 20, '', NULL, NULL),
(4, 'R402 - WorkSpace', 0, 20, '', NULL, NULL),
(5, 'R404 - Networking Laboratory (NWL)', 0, 20, '', NULL, NULL),
(6, 'R405 - Basic Electronics laboratory', 0, 20, '', NULL, NULL),
(7, 'R406 - Basic Electronics laboratory', 0, 20, '', NULL, NULL),
(8, 'R501 - Interfacing Laboratory (IFL)', 0, 20, '', NULL, NULL),
(9, 'R502 - Advance Electronics laboratory (AEL)', 0, 20, '', NULL, NULL),
(10, 'R506 - Pneumatic Laboratory', 0, 20, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_mb`
--

CREATE TABLE `room_mb` (
  `id` int(11) NOT NULL,
  `ruangan` varchar(50) NOT NULL,
  `status` int(11) NOT NULL,
  `max_people` int(11) NOT NULL,
  `notes` text NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `room_mb`
--

INSERT INTO `room_mb` (`id`, `ruangan`, `status`, `max_people`, `notes`, `createdAt`, `updatedAt`) VALUES
(1, 'TA.31 - Ruang Kelas Biasa', 0, 20, '', NULL, NULL),
(2, 'TA.32 - Lab Komputer Layout Perkantoran', 0, 20, '', NULL, NULL),
(3, 'TA.51 - Studio Broadcast', 0, 20, '', NULL, NULL),
(4, 'TA.52 - Lab Komputer', 0, 20, '', NULL, NULL),
(5, 'TA.53 - Lab Komputer', 0, 20, '', NULL, NULL),
(6, 'TA.54 - Lab Komputer', 0, 20, '', NULL, NULL),
(7, 'TA.55 - Studio Blended Learning', 0, 20, '', NULL, NULL),
(8, 'TA.56 - Lab Komputer', 0, 20, '', NULL, NULL),
(9, 'TA.61 - Ruang Kelas Biasa', 0, 20, '', NULL, NULL),
(10, 'TA.62 - Ruang Kelas Biasa', 0, 20, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `room_types`
--

CREATE TABLE `room_types` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `is_active` tinyint(4) NOT NULL DEFAULT 0,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `room_types`
--

INSERT INTO `room_types` (`id`, `name`, `is_active`, `created_at`, `updated_at`) VALUES
(1, 'Lab', 1, '2021-08-04 15:52:24', '2021-08-04 15:52:24'),
(2, 'Kelas', 1, '2021-08-04 15:52:24', '2021-08-04 15:52:24'),
(3, 'Workspace Multimedia', 1, '2021-08-05 12:09:56', '2021-08-05 12:09:56'),
(4, 'Workspace Rendering', 1, '2021-08-05 12:20:58', '2021-08-05 12:20:58'),
(5, 'Workspace Software Development', 1, '2021-08-05 12:21:08', '2021-08-05 12:21:08'),
(6, 'Workspace Data Science', 1, '2021-08-05 12:21:22', '2021-08-05 12:21:22'),
(7, 'Workspace Animation', 1, '2021-08-05 12:21:29', '2021-08-05 12:21:29'),
(8, 'Workspace Geography Information System', 1, '2021-08-05 12:21:43', '2021-08-05 12:21:43'),
(9, 'Workspace Photogrammetry', 1, '2021-08-05 12:23:16', '2021-08-05 12:23:16'),
(10, 'Workspace Remote Sensing', 1, '2021-08-05 12:23:25', '2021-08-05 12:23:25'),
(11, 'Workspace Attack and Defense', 1, '2021-08-05 12:23:32', '2021-08-05 12:23:32'),
(12, 'Workspace Data Security and Privacy', 1, '2021-08-05 12:23:39', '2021-08-05 12:23:39'),
(13, 'Workspace Cyber Forensic', 1, '2021-08-05 12:23:46', '2021-08-05 12:23:46'),
(14, 'Workspace Virtual Reality', 1, '2021-08-05 12:23:54', '2021-08-05 12:23:54'),
(15, 'Workspace Motion Capture', 1, '2021-08-05 12:24:02', '2021-08-05 12:24:02'),
(16, 'Workspace Animation Production', 1, '2021-08-05 12:24:09', '2021-08-05 12:24:09'),
(17, 'Workspace Creative Art Studio', 1, '2021-08-05 12:24:15', '2021-08-05 12:24:15'),
(18, 'Studio Fotografi', 1, '2021-08-05 12:24:22', '2021-08-05 12:24:22'),
(19, 'Studio Broadcasting', 1, '2021-08-05 12:24:34', '2021-08-05 12:24:34'),
(20, 'Studio Audio', 1, '2021-08-05 12:24:43', '2021-08-05 12:24:43'),
(21, 'Workspace Clay Modelling', 1, '2021-08-05 12:24:50', '2021-08-05 12:24:50'),
(22, 'Workspace Terrestrial Survey', 1, '2021-08-05 12:25:01', '2021-08-05 12:25:01'),
(23, 'Workspace Hydrographic Survey', 1, '2021-08-05 12:25:10', '2021-08-05 12:25:10');

-- --------------------------------------------------------

--
-- Table structure for table `sesi_if`
--

CREATE TABLE `sesi_if` (
  `id` int(11) NOT NULL,
  `sesi` char(100) NOT NULL,
  `slug` char(100) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sesi_if`
--

INSERT INTO `sesi_if` (`id`, `sesi`, `slug`, `createdAt`, `updatedAt`) VALUES
(1, '08:00 : 12:00 WIB', '08:00 : 12:00 wib', '2023-09-05 15:52:05', '2023-09-05 15:52:05'),
(2, '13:00 : 17:00 WIB', '13:00 : 17:00 wib', '2023-09-09 02:52:15', '2023-09-09 02:52:15'),
(3, '18:00 - 22:00 WIB', '18:00 - 22:00 wib', '2023-09-12 16:57:58', '2023-09-12 16:57:58');

-- --------------------------------------------------------

--
-- Table structure for table `sessions`
--

CREATE TABLE `sessions` (
  `sid` varchar(36) NOT NULL,
  `expires` datetime DEFAULT NULL,
  `data` text DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `sessions`
--

INSERT INTO `sessions` (`sid`, `expires`, `data`, `createdAt`, `updatedAt`) VALUES
('-iR8LsZnGJ3_GpshTPQR9jXoedniZhy8', '2023-12-15 07:09:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:09:15', '2023-12-14 07:09:15'),
('-JHZtpIxmfZh-4TFaHVc7mXEd_mL9eaN', '2023-12-15 08:01:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 08:01:59', '2023-12-14 08:01:59'),
('0JELVs8Ucb3LUfjQ37w-bksO5dcJdX3t', '2023-12-15 04:58:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:58:52', '2023-12-14 04:58:52'),
('0kbAElPye3Df7FLsFiPpnvWwN0fmQYHq', '2023-12-15 04:33:42', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:33:42', '2023-12-14 04:33:42'),
('10yHKYmUMGeufXxz-XrLOd9biF_nLRE2', '2023-12-15 04:48:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:48:04', '2023-12-14 04:48:04'),
('1cYmyq1povKB_HJK4ng7pHl5Di_ReJIa', '2023-12-14 13:16:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:16:52', '2023-12-13 13:16:52'),
('1uLRVCcWu4Oju7F7KVeBL_B0xVBNizaR', '2023-12-15 04:59:29', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:59:29', '2023-12-14 04:59:29'),
('2m4ZZqutMP1GZpy3Ej6D6ThF9eEpy5Qr', '2023-12-15 01:18:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 01:18:56', '2023-12-14 01:18:56'),
('2qFWin1MXIFABv-HWjP3TJKH_QZ_-RMC', '2023-12-15 07:03:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:03:34', '2023-12-14 07:03:34'),
('3BFwd7bb63AX-NAe4Gpfs0JRVcMaY5C7', '2023-12-14 13:14:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:14:46', '2023-12-13 13:14:46'),
('3EDR7X7QAFg1A-P2rJQlV2GzmbRGtlIH', '2023-12-14 13:15:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:15:21', '2023-12-13 13:15:21'),
('41YRCpYCIPQqH3TfOUPBSWCeKDday71g', '2023-12-14 13:14:46', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:14:46', '2023-12-13 13:14:46'),
('4BzfrAKSYZPxmFvf-iOERL34UQivUJye', '2023-12-15 07:10:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:10:53', '2023-12-14 07:10:53'),
('4qC_sO1KsoPvbG21YdExG8V_xFNbK7mN', '2023-12-15 04:48:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:48:27', '2023-12-14 04:48:27'),
('54Fg1I-CVPgIDvsAsPEy28CMBn8RvvbK', '2023-12-14 16:29:15', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:29:15', '2023-12-13 16:29:15'),
('5Icg-DlsVfXLBTy6lS9unwnLJaEvbsX_', '2023-12-15 08:00:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 08:00:21', '2023-12-14 08:00:21'),
('5KUjJUiwU13-_7z5O-XxqyZqSA27LRjy', '2023-12-15 04:53:04', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:53:04', '2023-12-14 04:53:04'),
('5OFKsl3WzNu-QcWGkm5DwUBUCt5BqDJn', '2023-12-14 13:17:07', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:17:07', '2023-12-13 13:17:07'),
('5WLPI7tCgLHjhDFwEiYXBgYI_u_bfOPm', '2023-12-15 04:56:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:56:20', '2023-12-14 04:56:20'),
('6NoRmG60buvzbWi80ZFgT9m3sDNpyDcQ', '2023-12-15 04:45:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:45:10', '2023-12-14 04:45:10'),
('6PR5xhwlJq4UZE-LNHAmec1ofK1IK-i0', '2023-12-15 04:51:12', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:51:12', '2023-12-14 04:51:12'),
('8fkG7Nz2Um1rdE-8gfkJIoCsPtzcZB-v', '2023-12-14 12:11:38', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 12:11:38', '2023-12-13 12:11:38'),
('9qf2vDIGPVvkLTtS_E0-wjk-5ijLkU3x', '2023-12-15 05:01:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 05:01:52', '2023-12-14 05:01:52'),
('ALg21VJJigoO14Nlu--h6pgd-s1FUiQx', '2023-12-14 12:11:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 12:11:53', '2023-12-13 12:11:53'),
('Anh-G8MHx-E5PomZfveI6MmzESbi8O5I', '2023-12-14 16:32:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:32:03', '2023-12-13 16:32:03'),
('Aq4jWYFsl8B2Y6l4l2ipbo7_iZPDAUqD', '2023-12-15 07:09:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:09:25', '2023-12-14 07:09:25'),
('BEtXQV6Ruix-sqIovu1tThp4Tw5P00Iu', '2023-12-14 12:10:08', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 12:10:08', '2023-12-13 12:10:08'),
('bRtx2BURS5WJOy1nyKS-Sy0pst5dkMiw', '2023-12-15 08:03:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 08:03:35', '2023-12-14 08:03:35'),
('BZURlddtExuqDAXxAkL7c0wiDbxXRKma', '2023-12-14 13:16:58', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:16:58', '2023-12-13 13:16:58'),
('CayF5krRrCfa1ufpCwQ_7ltE0nTYAdxX', '2023-12-15 04:50:56', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:50:56', '2023-12-14 04:50:56'),
('dclg53qrfnXMVGS9iY4QHvc2CYUekpuE', '2023-12-15 07:03:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:03:59', '2023-12-14 07:03:59'),
('DGdsPs2FZJ-yWAtRkHl1EosEGrV_Mlz6', '2023-12-15 04:45:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:45:49', '2023-12-14 04:45:49'),
('E0m_3ymZuJwx_cym5-jeYCbdduFmNuy-', '2023-12-14 16:35:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:35:05', '2023-12-13 16:35:05'),
('E3KutYWuc3UOyeuwuG--oeSnQQeSvcKk', '2023-12-15 04:50:27', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:50:27', '2023-12-14 04:50:27'),
('g6pbpsADMHXM6CK4TuThSusKa5UDhcfJ', '2023-12-15 04:56:59', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:56:59', '2023-12-14 04:56:59'),
('g80oktCtx0qXrkhdYzePpr82qo5CbSRx', '2023-12-14 16:34:16', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:34:16', '2023-12-13 16:34:16'),
('Gf9s1AlO56Wovid9wpDb00cX2z_CHJSE', '2023-12-14 16:36:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:36:26', '2023-12-13 16:36:26'),
('Gfqdqa_IfcyNwYE1SyW_Z3z3T4bXYshS', '2023-12-14 13:16:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:16:35', '2023-12-13 13:16:35'),
('gnjv2K_CUkg2eNOOf2xJxO1AVPQqOKo2', '2023-12-14 12:11:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 12:11:44', '2023-12-13 12:11:44'),
('grML5nHVGrmVqwBR7bHiTnxHNhhfqZvA', '2023-12-14 13:12:45', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:12:45', '2023-12-13 13:12:45'),
('GX9mj6pb6AgNjrw-OUQqgyMmxWXp88h_', '2023-12-15 04:51:48', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:51:48', '2023-12-14 04:51:48'),
('h309Oay5oOdn2qA1nxQRLsMwsHjYYL_S', '2023-12-15 04:48:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:48:49', '2023-12-14 04:48:49'),
('HDR_esTeqVxK_hQyDwruhDU8DwvrP1h0', '2023-12-14 13:18:54', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:18:54', '2023-12-13 13:18:54'),
('hW-OeK2St11LB_46S9Qt747ev9fHcRp6', '2023-12-15 04:50:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:50:49', '2023-12-14 04:50:49'),
('IA9fwCxGzJl6WmxYjNPteYWUiyTFlwGL', '2023-12-14 16:35:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:35:05', '2023-12-13 16:35:05'),
('IerI3RD0T5BYm5dMAXycQw11Za6WXy3X', '2023-12-14 16:32:02', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:32:02', '2023-12-13 16:32:02'),
('iGJJWZStnqQJSJmwXVi35H22m3CW3Kgn', '2023-12-14 16:29:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:29:25', '2023-12-13 16:29:25'),
('Ih6mQ9YharsZV6ZqBqLFdvQ_VwWRZwXF', '2023-12-14 16:30:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:30:30', '2023-12-13 16:30:30'),
('iuqmBSJ4zX7SQUxS8apExMfzSJKxxUG3', '2023-12-14 13:15:05', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:15:05', '2023-12-13 13:15:05'),
('j6R2ZCBcpzE67_e992h27bMe_jr5FbRz', '2023-12-15 01:17:41', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 01:17:41', '2023-12-14 01:17:41'),
('jCyQB9hNY3wcnn_9QOia7L7CXkTgxxTA', '2023-12-14 13:17:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:17:10', '2023-12-13 13:17:10'),
('kIcQc3GV4XhC1t4w2mqVabCWYLE19v6X', '2023-12-15 04:58:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:58:10', '2023-12-14 04:58:10'),
('kWbIH_5EQYXeijrF58SEBDg-vUzRRcfE', '2023-12-15 07:10:24', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:10:24', '2023-12-14 07:10:24'),
('Lb4gixw21nki1N38B7Ye7vqZFiyPOF0l', '2023-12-21 08:22:22', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-20 08:22:23', '2023-12-20 08:22:23'),
('LgqNAD1tzH8Xk6oS2YX2Slo5Uk-Agly-', '2023-12-14 16:33:36', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:33:36', '2023-12-13 16:33:36'),
('Mphx1qdLQxBVB6BzGa9EDkp0O1F2Ap22', '2023-12-14 12:11:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 12:11:32', '2023-12-13 12:11:32'),
('MQOQ8buGEzsrUp07igXKjCwdVgfeNhif', '2023-12-14 12:10:35', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 12:10:35', '2023-12-13 12:10:35'),
('mTcnjJMyXbP42NNbWADzViBfUIabZFOJ', '2023-12-15 04:51:37', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:51:37', '2023-12-14 04:51:37'),
('N2hQkzOCYmUvn6aTmKbqdfWgU1UNESdv', '2023-12-14 13:16:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:16:10', '2023-12-13 13:16:10'),
('NquW8W6VBVX-KQ8nPe1iQiuJBeCC5jKO', '2023-12-15 04:45:49', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:45:49', '2023-12-14 04:45:49'),
('nszJd4RitU1O7TcUNVwfdA5kOLInDeWD', '2023-12-14 16:36:26', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"ba0f6531-f666-4547-a552-36728e95a1ea\"}', '2023-12-13 13:19:01', '2023-12-13 16:36:26'),
('oAiLUFW58GbPRrdWmXWOkkA0Au3CBuot', '2023-12-15 04:58:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:58:52', '2023-12-14 04:58:52'),
('oCyfh-xZxUYr7rfd2Aj10pMHUDAFf5Xn', '2023-12-14 16:32:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:32:55', '2023-12-13 16:32:55'),
('oVkEmGKR-rhdJOltf-7pFRzPO9ho0pyd', '2023-12-15 04:58:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:58:10', '2023-12-14 04:58:10'),
('pN6cuNnuUBUOAopUufiAKCnfFwyQo7i5', '2023-12-14 16:31:44', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:31:44', '2023-12-13 16:31:44'),
('PzW7SpFdbzyI0x1Q-RBFKtaF-MHwI1aj', '2023-12-14 16:34:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:34:14', '2023-12-13 16:34:14'),
('qMQgwQZClv0EUlLPvNN4C7UsROw95nTM', '2023-12-15 04:57:43', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:57:43', '2023-12-14 04:57:43'),
('qOQBrZgGwbZ_Im0Q7YUibPjhuBVXqkfZ', '2023-12-14 13:19:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:19:01', '2023-12-13 13:19:01'),
('Ru1Hto4r8m-c-h2sRzgJvrAdL9TakpA5', '2023-12-14 13:23:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:23:03', '2023-12-13 13:23:03'),
('SCwLSiQoR42R0h_jUs2LwWcifzmv6ojB', '2023-12-14 16:35:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:35:40', '2023-12-13 16:35:40'),
('sDDeSMC88iWbdmWthhKmOC8V24zHwxO1', '2023-12-14 13:17:19', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:17:19', '2023-12-13 13:17:19'),
('tKWLmN4_YUQdaTCverOUjBckYwPDfv3a', '2023-12-14 16:34:21', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:34:21', '2023-12-13 16:34:21'),
('tldUiDXJ73NblqKaheMjWCJg_xUZdxWT', '2023-12-15 04:33:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:33:33', '2023-12-14 04:33:33'),
('tsHSUydzZxjhqypYhCRvwLfGy0r91g91', '2023-12-15 04:45:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:45:10', '2023-12-14 04:45:10'),
('u320hL9qV1Dzooj3rHuRGuS-4XbjGcbl', '2023-12-14 16:30:30', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:30:30', '2023-12-13 16:30:30'),
('U94ikStWW5XNnzY3Ut6MDaqxpoUChEu0', '2023-12-15 07:10:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:10:53', '2023-12-14 07:10:53'),
('UAyohPfxFj9DqdEM82uEM7k3VLElx9_W', '2023-12-14 16:28:53', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:28:53', '2023-12-13 16:28:53'),
('uCPI6jf_qr4fHNYfJJgm18xD1x06NzsX', '2023-12-15 04:50:10', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:50:10', '2023-12-14 04:50:10'),
('UHuqM85Gv_-noh5u_8lKfvFCQh1LcUy3', '2023-12-14 16:28:52', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:28:52', '2023-12-13 16:28:52'),
('umCkkQxGwoMNXP9jwOuF5O3f-0COCNxG', '2023-12-14 13:18:23', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:18:23', '2023-12-13 13:18:23'),
('UN_mPWNZOZ8u0G87dHVTySJgENnWcth_', '2023-12-15 04:51:33', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:51:33', '2023-12-14 04:51:33'),
('v3Ncj2F7tt2SMZ4NCn8cAXOTgc0daqrd', '2023-12-14 13:16:13', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:16:13', '2023-12-13 13:16:13'),
('V50z_ZyCSohBv_3v_s3bxJsOYAj67IEG', '2023-12-14 16:35:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:35:40', '2023-12-13 16:35:40'),
('v9RAxhaii1yQrA6oUohbsRpN7QHnznB6', '2023-12-14 13:23:03', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:23:03', '2023-12-13 13:23:03'),
('vf-QKOjId__lz7qxQtE1dxe3JRbpD5sa', '2023-12-15 04:50:01', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:50:01', '2023-12-14 04:50:01'),
('vT640CEaEGNeksOGuAPL8eIBHBa1bUPv', '2023-12-15 04:59:20', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:59:20', '2023-12-14 04:59:20'),
('w5HzyyvmH4H8mr9_bm_w1qkrz6GwjIlP', '2023-12-21 08:24:06', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"},\"userId\":\"ba0f6531-f666-4547-a552-36728e95a1ea\"}', '2023-12-20 08:22:23', '2023-12-20 08:24:06'),
('Whg4ltgjGRnVuWu9cGQvF_KihtHilm90', '2023-12-15 04:56:14', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:56:14', '2023-12-14 04:56:14'),
('wJRD92khH5mUXZO8bB94l2e3Unsj456c', '2023-12-14 13:16:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 13:16:25', '2023-12-13 13:16:25'),
('YJFLZLUy0cW6XFm0mZUX02Xi5QT0zjDY', '2023-12-15 04:33:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 04:33:55', '2023-12-14 04:33:55'),
('YrWPtdjSwY4kDLSQVYfvXqxY-FHpqQ46', '2023-12-15 07:11:40', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:11:40', '2023-12-14 07:11:40'),
('Z4GkM8LN762-ZX63UQ_SQ0cUtl0vwqoX', '2023-12-15 05:06:32', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 05:06:32', '2023-12-14 05:06:32'),
('ZePXQv0wbLTJlaihtfxank89KAJLeJY4', '2023-12-14 16:30:51', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:30:51', '2023-12-13 16:30:51'),
('zgjtgNXLY4eRebVfknj7K-tpZqFx5Wwn', '2023-12-14 16:32:55', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-13 16:32:55', '2023-12-13 16:32:55'),
('_WLToNVo709Wtp0IhwJOpYlsyHvnFq9v', '2023-12-15 07:09:25', '{\"cookie\":{\"originalMaxAge\":null,\"expires\":null,\"secure\":false,\"httpOnly\":true,\"path\":\"/\"}}', '2023-12-14 07:09:25', '2023-12-14 07:09:25');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `nim_nik` varchar(11) NOT NULL,
  `nama` char(100) NOT NULL,
  `uuid` char(100) NOT NULL,
  `jur_id` int(11) DEFAULT NULL,
  `role` int(11) NOT NULL,
  `password` char(100) NOT NULL,
  `email_pribadi` char(100) DEFAULT NULL,
  `phone` char(11) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `createBy` char(36) NOT NULL,
  `updateBy` char(36) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `nim_nik`, `nama`, `uuid`, `jur_id`, `role`, `password`, `email_pribadi`, `phone`, `createdAt`, `updatedAt`, `createBy`, `updateBy`) VALUES
(1, '123', 'Admin', 'ebc450d3-7dcc-4a36-9f3a-7c1de6a4168a', 5, 1, '$2b$10$1K7U8bIypHet6/KbKJQYp.YwygcD50fxTdmavD6QoeBKwpeJJJSs6', NULL, NULL, '2023-09-26 07:03:53', '2023-09-26 07:31:36', '', ''),
(2, '205017', 'Fuliza Lubis', '590b699d-0546-45ff-9aa5-2a6e5cd8caf9', 5, 9, '$2b$10$7FRRrs8Na2rqsTIuPyUzcegPxM5BEN3hxTjfXtr7WCzyNkLZ26FvG', 'admin@gmail.com', '077231234', '2023-09-08 07:18:50', '2023-09-08 07:18:50', '', ''),
(3, '214188', 'Dwi adi setiawan', 'e5ba9a7d-c3f5-489b-a4e1-a3da85695b32', 5, 3, '$2b$10$YMeI4cfQrWtUpGg5cehxXeJZjaXeZPjjewcgef4p7OAy3wd5wLw46', 'admin@gmail.com', '077231234', '2023-09-08 07:19:51', '2023-09-08 07:19:51', '', ''),
(4, '213154', 'Afrizal', '08ddecc9-c098-41e2-8e6e-6cf7e3168af9', 5, 3, '$2b$10$TMkg4xvJ1Dhb0HceavddsOHu1lW4mPdpAEWH/vZcJQ4bu7FyRGTIe', 'admin@gmail.com', '077231234', '2023-09-08 07:20:24', '2023-09-08 07:20:24', '', ''),
(5, '100017', 'Metta Santiputri, S.T., M.Sc., Ph.D', '84b8edff-1754-4999-aab5-bc5d1f1373c2', 1, 4, '$2b$10$v7CzBstbViPPmiJC3n6JLunAfz7snwbmn4sgv8V51yOrU9VL63yLO', '', '077231234', '2023-09-08 07:26:28', '2023-09-08 07:26:28', '', ''),
(6, '100015', 'Uuf Brajawidagda, S.T., M.T., Ph.D', 'fbe91b70-19c0-4309-bda8-f667959d8d4c', 1, 4, '$2b$10$v6KteRBHGwWmUYysDIGr9Oazme6ZR/BWYXyO2MTGRy/uHKKY80KNa', 'admin@gmail.com', '077231234', '2023-09-08 07:37:16', '2023-09-08 07:37:16', '', ''),
(7, '100012', 'Ari Wibowo, S.T., M.T.', 'a33e6e69-890f-4af5-8bca-aae2ebe2a466', 1, 4, '$2b$10$Ee8NAV/44RypBA0VNkZmLuYRcOUijE83vmBDmnExPpqtv.NbwzCca', 'admin@gmail.com', '077231234', '2023-09-08 07:46:21', '2023-09-08 07:46:21', '', ''),
(8, '218292', 'Dede Nurdiansyah, S.Sos', 'ec578b0b-f305-403e-9fbd-118e9538c172', 1, 5, '$2b$10$WTCuTk5CubXC7zCTpfLItOt1uoxOalrqmkCCS2.mfywAq4WCtjxSC', NULL, NULL, '2023-09-12 12:53:55', '2023-09-12 12:53:55', '', ''),
(9, '7159448', 'Banu', '4d6e0d0e-b277-4b13-9f49-b3c1f2f5c85d', 1, 8, '$2b$10$Qk2LnK/1ha8o2JDqq4tfJ.tvh0y9DFnqNWkHv/ajSvlC7OK.HftGe', NULL, NULL, '2023-09-12 13:00:33', '2023-09-12 13:00:33', '', ''),
(10, '211100', 'Andri Albertha Pratama, S.Tr.Kom., M.Sn', 'd8597b22-e81a-4187-b9a7-824ab49fa9f0', 1, 7, '$2b$10$KRsIcAy.gMXc2mC/8n2rfu4Xe21bAtldWu3IsKs8n0K0oOfrBaoZS', NULL, NULL, '2023-09-12 13:12:03', '2023-09-12 13:12:03', '', ''),
(11, '715953', 'Agus', 'e92112b1-dd36-40ba-8d41-5155c61a9717', 5, 6, '$2b$10$9dJEQNAb5/eA5fjYfhtxa.MQaL8mCC1oxWEvmr2xfEKxCq6MezCoq', NULL, NULL, '2023-09-12 13:14:51', '2023-09-12 13:14:51', '', ''),
(12, '115143', 'Ahmad Hamim Thohari, S.Tr., M.T.', 'b6b7f18c-38db-41e0-a505-49aa2918581c', 1, 4, '$2b$10$17zAEdKXCo8yv3UxoBKxL.2stDUxYLWNotZHave06vBv2KDbOqaG2', 'testemailsi0712@gmail.com', NULL, '2023-09-18 08:21:13', '2023-09-18 08:21:13', '', ''),
(13, '119222', 'Dodi Prima Resda, S.Pd., M.Kom', '5e18d9b9-17d3-4c58-8b7c-b4124ef1e578', 1, 4, '$2b$10$LtjZeLG39jgSrWKFD7Cf5.lnsWvc9CDQnx1zcZuRLFztLooECkMJa', NULL, NULL, '2023-09-18 08:21:58', '2023-09-18 08:21:58', '', ''),
(14, '116165', 'Adhitomo Wirawan, S.ST., M.BA', 'bd6b0d8f-91b3-4918-9265-d63b59c29e1f', 3, 4, '$2b$10$BPZcrT3n/uk/aCCqTJx81ekjsm6q9yf7VuCidZQatSvJ7Hczsv1nm', NULL, NULL, '2023-09-18 08:26:08', '2023-09-18 08:26:08', '', ''),
(15, '114128', 'Adi Irawan Setiyanto, S.E., M.Ec.Dev.', 'ebaf6ecd-fbb4-446e-8556-551108933125', 3, 4, '$2b$10$Ozg.NARvVIbNX7cdMXsFlezTzzKdXdyLHY3uNDfOoQ1XUX9Hk7YGO', NULL, NULL, '2023-09-18 08:26:39', '2023-09-18 08:26:39', '', ''),
(16, '111077', 'Aditya Wirangga Pratama, M.AB', 'ba0e07ab-e826-4daa-8c80-5f11601c4cfe', 3, 4, '$2b$10$MBJ2kp431ea0TwP7suq1feySKbhuBAg94MVF7z7TqAChrcrxShrv6', NULL, NULL, '2023-09-18 08:27:19', '2023-09-18 08:27:19', '', ''),
(17, '100014', 'Bambang Hendrawan, S.T., M.S.M.', '110cfebf-e4f6-44d8-8b7d-077e7de487e0', 3, 4, '$2b$10$CIkYFztRc8leGnRDdSKY1ugoUpbPMF0g50IZpfhkOUQGZnfuh..m.', NULL, NULL, '2023-09-18 08:27:55', '2023-09-18 08:27:55', '', ''),
(18, '100008', 'Dr. Muhammad Zaenuddin, S.Si., M.Sc.', 'baf72a0b-b512-4d85-99c8-4700d100c145', 3, 4, '$2b$10$g6IYr7fGG4Tj.m5tqlIrb.rO.n5bLfTBWF0x87b06WHVdQbNU4gJq', NULL, NULL, '2023-09-18 08:28:13', '2023-09-18 08:28:13', '', ''),
(19, '100013', 'Ahmad Riyad Firdaus, S.Si., M.T., Ph.D', '45b2d2ee-7809-462e-ace6-24926b4a1398', 4, 4, '$2b$10$TFZQ7UsdVxYrjsgoIaUw3uqFgcENyrZav/4B5EaPZxM3Z/mWFU50u', NULL, NULL, '2023-09-18 14:43:57', '2023-09-18 14:43:57', '', ''),
(20, '100006', 'Daniel Sutopo Pamungkas, S.T.,M.T., Ph.D', '9415665d-f284-4726-8dfd-eb67e3e0a5bb', 4, 4, '$2b$10$oXGLG33/8ITIynRqPQt9TuVIvkzDztElWzr2IuKaXKgIDGqzruqxK', NULL, NULL, '2023-09-18 14:44:37', '2023-09-18 14:44:37', '', ''),
(21, '117186', 'Eka Mutia Lubis, S.Pd., M.Pd', 'ca7d15cb-a769-46c0-84a4-e6bda1b824ec', 4, 4, '$2b$10$qyWoC4M1h9.A1xkzzo2E8e8.xvM8MjMtEtuwxHCAHshA7KNnTFWBy', NULL, NULL, '2023-09-18 14:45:07', '2023-09-18 14:45:07', '', ''),
(22, '119219', 'Ika Karlina Laila Nur Suciningtyas, S.Si., M.Si', 'd29d03ed-6bbf-43ec-a214-0dcf295be877', 4, 4, '$2b$10$vCe.bnbEvz6/oOT.YUhoKu.oEO5l9NxScstHHKKuUItzTtwGK/KYq', NULL, NULL, '2023-09-18 14:45:35', '2023-09-18 14:45:35', '', ''),
(23, '110073', 'Fauzun Atabiq, S.T., M.Cs', 'f7602624-bc14-4353-93e5-5c50fabdc5d7', 4, 4, '$2b$10$3rK/owf.kdWn3Mk5pdCb/OIOllHP6h60Cwwk4nvx1ijZVVwEPDgrW', NULL, NULL, '2023-09-18 14:45:52', '2023-09-18 14:45:52', '', ''),
(25, '3312001093', 'Raka', '1cd80987-9655-41e0-b316-81d124b6d8ae', 3, 2, '$2b$10$vZ8vahQOYWJeiB6UToQHKO1XCsvqdhBws6H.SwCFHQE7WJTluBBbm', NULL, NULL, '2023-09-26 07:53:49', '2023-11-07 02:06:08', '', ''),
(29, '3312001092', 'Fahri Efendi', 'ba0f6531-f666-4547-a552-36728e95a1ea', 1, 2, '$2b$10$FDt0m.jWL97b2mpUpiIgi.VTvAbXR3oRmHOCHngA1s5hyiQkexGuO', NULL, NULL, '2023-10-02 04:41:18', '2023-10-02 04:41:18', '', ''),
(30, '3312001091', 'Rani Agustin', '10c95a45-3bac-4757-aa68-bf92b48c35c1', 4, 2, '$2b$10$PAQS/qNJEE2fb4a8/a2O.OYfSVtgzB6tQ5LU1T8SYet15fFKTCr26', NULL, NULL, '2023-10-03 00:39:08', '2023-10-03 00:39:08', '', ''),
(32, '3312101105', 'Glenys Ilona', 'd7a39612-9597-489a-bb89-17fd687615e5', 1, 2, '$2b$10$m5WxdYGNMG9l9zd34ajUR.7uB.Gn2oJ5ca05EEpFBL.U.grx7hbY2', NULL, NULL, '2023-10-30 07:06:02', '2023-10-30 07:06:02', '', ''),
(33, '619070', 'Suhelmi', '7a06a049-56a8-45b3-ada5-7d4133b614df', 1, 6, '$2b$10$3IcCzpZlnYbSPX4.z3cyS.FM.FZAa5tA8udPsUxqnflCsmtjoxXNe', NULL, NULL, '2023-11-03 07:42:38', '2023-11-03 07:42:38', '', ''),
(34, '218293', 'Anisa Rama', '35f74cda-36a3-43af-aa2b-077cb2f695be', 3, 5, '$2b$10$F8vqz46nhGfk4VFx9iW7meBqBbO5McandIwOVWHHRJ0m5d7gZUKIu', NULL, NULL, '2023-11-07 02:01:46', '2023-11-07 02:01:46', '', ''),
(35, '218297', 'Riki Setia', 'fb64cc90-06bb-48fd-bb73-6567a2ecd27c', 4, 5, '$2b$10$fsrdvGUmjlgrD/noEmTht.OfZjELkrn9F6Co4VfgMWBRXfZx6eQhe', NULL, NULL, '2023-11-07 02:01:46', '2023-11-07 02:01:46', '', ''),
(36, '3312001099', 'Rania', '0442f991-1847-44df-a1c7-c5b8c943871b', 1, 2, '$2b$10$SsKXi5Q52w5rNDswCtnvyO9Dx1BuIRNEJ5Xp.olTtZKYTK2wnM2U6', NULL, NULL, '2023-11-09 03:27:21', '2023-11-09 03:27:21', '', ''),
(37, '3312101106', 'Rhman E', 'a59bcdc3-ec98-45a9-974c-165c385057a0', 1, 2, '$2b$10$YgK4UPuAPbGYWe.AsfiYzOvYdML80R.vgLo3Pavd.6E00OKCO0T/W', NULL, NULL, '2023-11-30 14:37:26', '2023-11-30 14:37:54', '', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `borrow_room_audit`
--
ALTER TABLE `borrow_room_audit`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `dosen_student_id` (`dosen_student_id`),
  ADD KEY `dosen_id` (`dosen_id`),
  ADD KEY `ruangan_id` (`ruangan`);

--
-- Indexes for table `borrow_room_el`
--
ALTER TABLE `borrow_room_el`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `dosen_student_id` (`dosen_student_id`),
  ADD KEY `dosen_id` (`dosen_id`),
  ADD KEY `ruangan_id` (`ruangan`);

--
-- Indexes for table `borrow_room_if`
--
ALTER TABLE `borrow_room_if`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `dosen_student_id` (`dosen_student_id`),
  ADD KEY `dosen_id` (`dosen_id`),
  ADD KEY `ruangan_id` (`ruangan`),
  ADD KEY `sesi` (`sesi`);

--
-- Indexes for table `borrow_room_mb`
--
ALTER TABLE `borrow_room_mb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `userId` (`userId`),
  ADD KEY `dosen_student_id` (`dosen_student_id`),
  ADD KEY `dosen_id` (`dosen_id`),
  ADD KEY `ruangan_id` (`ruangan`);

--
-- Indexes for table `jurusan`
--
ALTER TABLE `jurusan`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `prodi`
--
ALTER TABLE `prodi`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `room`
--
ALTER TABLE `room`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruangan` (`ruangan`);

--
-- Indexes for table `room_bmn`
--
ALTER TABLE `room_bmn`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruangan` (`ruangan`);

--
-- Indexes for table `room_el`
--
ALTER TABLE `room_el`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruangan` (`ruangan`);

--
-- Indexes for table `room_mb`
--
ALTER TABLE `room_mb`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ruangan` (`ruangan`);

--
-- Indexes for table `room_types`
--
ALTER TABLE `room_types`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `sesi_if`
--
ALTER TABLE `sesi_if`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sesi` (`sesi`);

--
-- Indexes for table `sessions`
--
ALTER TABLE `sessions`
  ADD PRIMARY KEY (`sid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `jur_id` (`jur_id`),
  ADD KEY `role` (`role`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `borrow_room_audit`
--
ALTER TABLE `borrow_room_audit`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=79;

--
-- AUTO_INCREMENT for table `borrow_room_el`
--
ALTER TABLE `borrow_room_el`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=74;

--
-- AUTO_INCREMENT for table `borrow_room_if`
--
ALTER TABLE `borrow_room_if`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=200;

--
-- AUTO_INCREMENT for table `borrow_room_mb`
--
ALTER TABLE `borrow_room_mb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=82;

--
-- AUTO_INCREMENT for table `jurusan`
--
ALTER TABLE `jurusan`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `prodi`
--
ALTER TABLE `prodi`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `room`
--
ALTER TABLE `room`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `room_bmn`
--
ALTER TABLE `room_bmn`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `room_el`
--
ALTER TABLE `room_el`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `room_mb`
--
ALTER TABLE `room_mb`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `room_types`
--
ALTER TABLE `room_types`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `sesi_if`
--
ALTER TABLE `sesi_if`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `borrow_room_audit`
--
ALTER TABLE `borrow_room_audit`
  ADD CONSTRAINT `borrow_room_audit_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_audit_ibfk_2` FOREIGN KEY (`dosen_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_audit_ibfk_3` FOREIGN KEY (`ruangan`) REFERENCES `room_bmn` (`id`);

--
-- Constraints for table `borrow_room_el`
--
ALTER TABLE `borrow_room_el`
  ADD CONSTRAINT `borrow_room_el_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_el_ibfk_2` FOREIGN KEY (`ruangan`) REFERENCES `room_el` (`id`),
  ADD CONSTRAINT `borrow_room_el_ibfk_3` FOREIGN KEY (`dosen_id`) REFERENCES `users` (`id`);

--
-- Constraints for table `borrow_room_if`
--
ALTER TABLE `borrow_room_if`
  ADD CONSTRAINT `borrow_room_if_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_if_ibfk_3` FOREIGN KEY (`ruangan`) REFERENCES `room` (`id`),
  ADD CONSTRAINT `borrow_room_if_ibfk_4` FOREIGN KEY (`sesi`) REFERENCES `sesi_if` (`id`),
  ADD CONSTRAINT `borrow_room_if_ibfk_5` FOREIGN KEY (`dosen_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_if_ibfk_6` FOREIGN KEY (`sesi`) REFERENCES `sesi_if` (`id`);

--
-- Constraints for table `borrow_room_mb`
--
ALTER TABLE `borrow_room_mb`
  ADD CONSTRAINT `borrow_room_mb_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_mb_ibfk_3` FOREIGN KEY (`dosen_id`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `borrow_room_mb_ibfk_4` FOREIGN KEY (`ruangan`) REFERENCES `room_mb` (`id`);

--
-- Constraints for table `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_ibfk_1` FOREIGN KEY (`role`) REFERENCES `role` (`id`),
  ADD CONSTRAINT `users_ibfk_2` FOREIGN KEY (`jur_id`) REFERENCES `jurusan` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
