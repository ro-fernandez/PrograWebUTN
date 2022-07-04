-- phpMyAdmin SQL Dump
-- version 5.3.0-dev+20220703.0056236a4c
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-07-2022 a las 15:51:41
-- Versión del servidor: 10.4.24-MariaDB
-- Versión de PHP: 8.0.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `fernandez_rocio`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `id_solicitud` int(11) NOT NULL,
  `email` varchar(320) NOT NULL,
  `dni` varchar(8) NOT NULL,
  `apynom` varchar(100) NOT NULL,
  `promo` enum('1','2','3','4') NOT NULL,
  `mes` enum('Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre') NOT NULL,
  `quincena` enum('Primera','Segunda') NOT NULL,
  `dia` enum('Domingo','Lunes','Martes','Miércoles','Jueves','Viernes','Sábado') NOT NULL,
  `horario` enum('Mañana','Tarde') NOT NULL,
  `locacion` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `solicitudes`
--

INSERT INTO `solicitudes` (`id_solicitud`, `email`, `dni`, `apynom`, `promo`, `mes`, `quincena`, `dia`, `horario`, `locacion`) VALUES
(12, 'hola@gmail.com', '11222333', 'María Pérez', '1', 'Enero', 'Segunda', 'Martes', 'Tarde', 'Puerto Madero'),
(13, 'cosme@gmail.com', '11333555', 'Cosme Fulanito', '3', 'Abril', 'Primera', 'Miércoles', 'Tarde', 'Rosedal'),
(14, 'hola@gmail.com', '11222333', 'María Pérez', '4', 'Febrero', 'Segunda', 'Sábado', 'Tarde', 'Rosedal'),
(15, 'hola@gmail.com', '11222333', 'María Pérez', '3', 'Enero', 'Primera', 'Martes', 'Mañana', 'Jardín Japonés');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`id_solicitud`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `id_solicitud` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;



