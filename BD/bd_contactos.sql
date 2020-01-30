-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 30-01-2020 a las 16:03:43
-- Versión del servidor: 10.4.8-MariaDB
-- Versión de PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `bd_contactos`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_contacto`
--

CREATE TABLE `tbl_contacto` (
  `id_contacto` int(8) NOT NULL,
  `nombre_contacto` varchar(30) NOT NULL,
  `fk_id_user` int(4) NOT NULL,
  `fk_id_amigo` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_contacto`
--

INSERT INTO `tbl_contacto` (`id_contacto`, `nombre_contacto`, `fk_id_user`, `fk_id_amigo`) VALUES
(1, 'Victor', 2, 3),
(2, 'Jaime', 3, 2),
(5, 'ivan', 2, 4),
(6, 'Jaime', 4, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_estado`
--

CREATE TABLE `tbl_estado` (
  `id_estado` int(3) NOT NULL,
  `estado` varchar(20) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_estado`
--

INSERT INTO `tbl_estado` (`id_estado`, `estado`) VALUES
(0, 'Bloqueado'),
(1, 'Activo'),
(2, 'Eliminado');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id_user` int(4) NOT NULL,
  `nombre_user` varchar(20) NOT NULL,
  `apellidos_user` varchar(40) NOT NULL,
  `telefono_user` int(9) NOT NULL,
  `email_user` varchar(50) NOT NULL,
  `direccion1_user` varchar(50) NOT NULL,
  `direccion2_user` varchar(50) NOT NULL,
  `imagen_user` varchar(100) NOT NULL,
  `password_user` varchar(100) NOT NULL,
  `fk_estado_user` int(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`id_user`, `nombre_user`, `apellidos_user`, `telefono_user`, `email_user`, `direccion1_user`, `direccion2_user`, `imagen_user`, `password_user`, `fk_estado_user`) VALUES
(2, 'Jaime', 'Carcedo Galindo', 987654321, 'jaime@gmail.com', 'av.Carmen Amaya', 'av. Alcalde Barnils', 'default.png', '', 1),
(3, 'Victor', 'Perez', 987654321, 'victor@gmail.com', 'av.alcalde barnils', 'av. Alcalde Barnils', 'default.png', '81dc9bdb52d04dc20036dbd8313ed055', 1),
(4, 'Ivan', 'Garcia', 987654321, 'ivan@gmail.com', 'av.europa', 'av.europa', 'default.png', '81dc9bdb52d04dc20036dbd8313ed055', 1);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_contacto`
--
ALTER TABLE `tbl_contacto`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `fk_id_user` (`fk_id_user`),
  ADD KEY `fk_id_amigo` (`fk_id_amigo`);

--
-- Indices de la tabla `tbl_estado`
--
ALTER TABLE `tbl_estado`
  ADD PRIMARY KEY (`id_estado`);

--
-- Indices de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`id_user`),
  ADD KEY `fk_estado_user` (`fk_estado_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_contacto`
--
ALTER TABLE `tbl_contacto`
  MODIFY `id_contacto` int(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `tbl_estado`
--
ALTER TABLE `tbl_estado`
  MODIFY `id_estado` int(3) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `id_user` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_contacto`
--
ALTER TABLE `tbl_contacto`
  ADD CONSTRAINT `tbl_contacto_ibfk_1` FOREIGN KEY (`fk_id_user`) REFERENCES `tbl_usuario` (`id_user`),
  ADD CONSTRAINT `tbl_contacto_ibfk_2` FOREIGN KEY (`fk_id_amigo`) REFERENCES `tbl_usuario` (`id_user`);

--
-- Filtros para la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD CONSTRAINT `tbl_usuario_ibfk_1` FOREIGN KEY (`fk_estado_user`) REFERENCES `tbl_estado` (`id_estado`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
