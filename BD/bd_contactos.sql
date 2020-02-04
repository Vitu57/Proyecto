-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 04-02-2020 a las 17:18:23
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
  `id_contacto` int(11) NOT NULL,
  `nombre_contacto` varchar(20) NOT NULL,
  `apellidos_contacto` varchar(50) NOT NULL,
  `email_contacto` varchar(50) NOT NULL,
  `telefono_contacto` int(9) NOT NULL,
  `imagen_contacto` varchar(100) NOT NULL,
  `direccion1_contacto` varchar(100) NOT NULL,
  `direccion2_contacto` varchar(100) NOT NULL,
  `fk_id_user` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_contacto`
--

INSERT INTO `tbl_contacto` (`id_contacto`, `nombre_contacto`, `apellidos_contacto`, `email_contacto`, `telefono_contacto`, `imagen_contacto`, `direccion1_contacto`, `direccion2_contacto`, `fk_id_user`) VALUES
(2, 'Ivan', 'Garcia', '', 987654321, 'default.png', '', '', 3),
(8, 'Oscar', 'Gonzalez', 'vic@gmail.com', 0, 'perfil3.png', 'C/Girona Prat De Llobregat', 'Av.Remolars Barcelona', 3),
(9, 'Gerard', 'Pazos', 'ur@gmail.com', 0, 'perfil1.png', 'C/Estels Barcelona', 'Av.Campana Barcelona', 3),
(10, 'Marc', 'Garcia', 'random@gmail.com', 0, 'perfil4.png', 'C/Margarides Viladecans', 'C/Manresa Girona', 3),
(11, 'Ivan', 'Perez', 'randomm@gmail.com', 0, 'default.png', 'av/random', 'av/random2', 4),
(17, 'Felipe', 'Perez', 'random@gmail.com', 0, 'default.png', '', '', 3);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_telefono`
--

CREATE TABLE `tbl_telefono` (
  `id_telefono` int(4) NOT NULL,
  `num_telefono` int(9) NOT NULL,
  `tipo_telefono` varchar(40) NOT NULL,
  `fk_id_contacto` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_telefono`
--

INSERT INTO `tbl_telefono` (`id_telefono`, `num_telefono`, `tipo_telefono`, `fk_id_contacto`) VALUES
(16, 51671627, 'telefono', 2),
(17, 987654321, 'movil', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tbl_usuario`
--

CREATE TABLE `tbl_usuario` (
  `id_user` int(11) NOT NULL,
  `nombre_user` varchar(20) NOT NULL,
  `password_user` varchar(100) NOT NULL,
  `email_user` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `tbl_usuario`
--

INSERT INTO `tbl_usuario` (`id_user`, `nombre_user`, `password_user`, `email_user`) VALUES
(3, 'Jaime', '81dc9bdb52d04dc20036dbd8313ed055', 'jaime@gmail.com'),
(4, 'Victor', '81dc9bdb52d04dc20036dbd8313ed055', 'victor@gmail.com');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `tbl_contacto`
--
ALTER TABLE `tbl_contacto`
  ADD PRIMARY KEY (`id_contacto`),
  ADD KEY `fk_id_user` (`fk_id_user`);

--
-- Indices de la tabla `tbl_telefono`
--
ALTER TABLE `tbl_telefono`
  ADD PRIMARY KEY (`id_telefono`),
  ADD KEY `fk_id_contacto` (`fk_id_contacto`);

--
-- Indices de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  ADD PRIMARY KEY (`id_user`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `tbl_contacto`
--
ALTER TABLE `tbl_contacto`
  MODIFY `id_contacto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `tbl_telefono`
--
ALTER TABLE `tbl_telefono`
  MODIFY `id_telefono` int(4) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `tbl_usuario`
--
ALTER TABLE `tbl_usuario`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tbl_contacto`
--
ALTER TABLE `tbl_contacto`
  ADD CONSTRAINT `tbl_contacto_ibfk_1` FOREIGN KEY (`fk_id_user`) REFERENCES `tbl_usuario` (`id_user`);

--
-- Filtros para la tabla `tbl_telefono`
--
ALTER TABLE `tbl_telefono`
  ADD CONSTRAINT `tbl_telefono_ibfk_1` FOREIGN KEY (`fk_id_contacto`) REFERENCES `tbl_contacto` (`id_contacto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
