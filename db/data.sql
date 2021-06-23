--
-- PostgreSQL database dump
--

-- Dumped from database version 9.6.10
-- Dumped by pg_dump version 9.6.10

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET default_tablespace = '';

SET default_with_oids = false;

--
-- Name: items; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public.items (
    id SERIAL PRIMARY KEY,
    title character varying(10) DEFAULT NULL::character varying,
    description character varying(296) DEFAULT NULL::character varying
);


ALTER TABLE public.items OWNER TO admin;

--
-- Name: users; Type: TABLE; Schema: public; Owner: rebasedata
--

CREATE TABLE public.users (
    id SERIAL PRIMARY KEY,
    email character varying(28) DEFAULT NULL::character varying,
    password character varying(87) DEFAULT NULL::character varying
);


ALTER TABLE public.users OWNER TO admin;

--
-- Data for Name: items; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public.items (id, title, description) FROM stdin;
5	Lorem Test	Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book
9	pdf	this.setState({ items: res.data })
11	asdad	asdasdasdasdas
12	wefwe	erwerwerwerwer
13	asdfs	sdfsfsfd
14	asdfs	sfsdfsdf
15	qw	qw
16	ertert	rdfghbjnm
17	sddf	sdfsdfsdf
18	qweqwe	my names is k 
\.


--
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: rebasedata
--

COPY public.users (id, email, password) FROM stdin;
2	sdfsdf	sdfsdfdfnotreallyhashed
3	sdfsdsdff	sdfsdfdfnotreallyhashed
5	dfssdfsdfsfsdfgsfsf	sdfsdfdffdfnotreallyhashed
6	str768ing	strino8765rtfghjgnotreallyhashed
7	str7kjhg68ing	strnkjbjhino8765rtfghjgnotreallyhashed
8	sdfsdfsdfsdfsf	$pbkdf2-sha256$29000$VqpVSsnZG6MUwjgnxJgzZg$3DpxC6q2/5wZGA2yKWKUG2BNxoCXUAz7KxMRgTqRneM
9	sdfsdfsdfssdfsadfsf	$pbkdf2-sha256$29000$F8JY611rba11zpkzRgjhvA$jvhoMk1n6fSM8nHgmr2QV9fYRvPzr8Q97/qVB.S0cJo
10	sdfsdfsddfgdfgdfgfssdfsadfsf	$pbkdf2-sha256$29000$bw1BKMWYMybEeA/BmFNKyQ$HxLUN5tYokvHJia2AqgVwUOkLHdAghdmN4PaeBla644
11	email	$pbkdf2-sha256$29000$6Z2zFoIQIgRgDMH431sLYQ$aPhf2B13u10USrloVThEwTrkvmjlh2Vr6lcfzHtBvs0
12	admin@admin.com	$pbkdf2-sha256$29000$RcjZW4txbk2pNWYMYUzJmQ$uI7rB5j1Iowo2mOWNW4YpBKM0oe16pp6Wf5XgRlRcW8
13	wer343	$pbkdf2-sha256$29000$a41x7h1D6H0vRai1FuLcmw$2vSPNev00fpC.mTmoLo8NqhqY/SP2Y2Z.fwEe6NziNM
14	werdsff343	$pbkdf2-sha256$29000$tfb.39v7X8v5v7eWspZyDg$2L30/WYGo0huSIj3mnM1ayL4MYTqc0JsFxeFfpwhrKw
\.


--
-- PostgreSQL database dump complete
--

