PGDMP     *    	                |            videohosting    14.7    14.7 '    (           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            )           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            *           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            +           1262    33137    videohosting    DATABASE     i   CREATE DATABASE videohosting WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE videohosting;
                postgres    false            �            1259    33138    Answers    TABLE     �   CREATE TABLE public."Answers" (
    id integer NOT NULL,
    date date NOT NULL,
    text character varying NOT NULL,
    user_id integer NOT NULL,
    comment_id integer NOT NULL
);
    DROP TABLE public."Answers";
       public         heap    postgres    false            �            1259    33143    Answers_id_seq    SEQUENCE     �   ALTER TABLE public."Answers" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Answers_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    209            �            1259    33144    Comments    TABLE     �   CREATE TABLE public."Comments" (
    id integer NOT NULL,
    video character varying NOT NULL,
    date date NOT NULL,
    text character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Comments";
       public         heap    postgres    false            �            1259    33149    Comments_id_seq    SEQUENCE     �   ALTER TABLE public."Comments" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Comments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    211            �            1259    33150    Dislikes    TABLE     f   CREATE TABLE public."Dislikes" (
    name character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Dislikes";
       public         heap    postgres    false            �            1259    33155    History watch    TABLE     k   CREATE TABLE public."History watch" (
    user_id integer NOT NULL,
    path character varying NOT NULL
);
 #   DROP TABLE public."History watch";
       public         heap    postgres    false            �            1259    33160    Likes    TABLE     c   CREATE TABLE public."Likes" (
    name character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Likes";
       public         heap    postgres    false            �            1259    33165    Links    TABLE     �   CREATE TABLE public."Links" (
    user_id integer NOT NULL,
    link character varying NOT NULL,
    link_id integer NOT NULL
);
    DROP TABLE public."Links";
       public         heap    postgres    false            ,           0    0    TABLE "Links"    ACL     2   REVOKE ALL ON TABLE public."Links" FROM postgres;
          public          postgres    false    216            �            1259    33170    Links_link_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Links_link_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Links_link_id_seq";
       public          postgres    false    216            -           0    0    Links_link_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Links_link_id_seq" OWNED BY public."Links".link_id;
          public          postgres    false    217            �            1259    33171    Subscribers    TABLE     l   CREATE TABLE public."Subscribers" (
    user_id integer NOT NULL,
    channel character varying NOT NULL
);
 !   DROP TABLE public."Subscribers";
       public         heap    postgres    false            �            1259    33176    Users    TABLE     q  CREATE TABLE public."Users" (
    id integer NOT NULL,
    login character varying(30) NOT NULL,
    password character varying(255) NOT NULL,
    email character varying NOT NULL,
    name character varying(30),
    description character varying(250),
    avatar character varying DEFAULT '/images/users-avatar/Avatar-default.png'::character varying,
    date date
);
    DROP TABLE public."Users";
       public         heap    postgres    false            �            1259    33182    Users_id_seq    SEQUENCE     �   ALTER TABLE public."Users" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    33183    Videos    TABLE     B  CREATE TABLE public."Videos" (
    path character varying NOT NULL,
    user_id integer NOT NULL,
    name character varying(100),
    preview character varying DEFAULT '/videos/posters/default.png'::character varying,
    date date,
    views integer DEFAULT 0,
    description character varying,
    duration integer
);
    DROP TABLE public."Videos";
       public         heap    postgres    false                       2604    33190    Links link_id    DEFAULT     r   ALTER TABLE ONLY public."Links" ALTER COLUMN link_id SET DEFAULT nextval('public."Links_link_id_seq"'::regclass);
 >   ALTER TABLE public."Links" ALTER COLUMN link_id DROP DEFAULT;
       public          postgres    false    217    216                      0    33138    Answers 
   TABLE DATA           H   COPY public."Answers" (id, date, text, user_id, comment_id) FROM stdin;
    public          postgres    false    209   F)                 0    33144    Comments 
   TABLE DATA           D   COPY public."Comments" (id, video, date, text, user_id) FROM stdin;
    public          postgres    false    211   c)                 0    33150    Dislikes 
   TABLE DATA           3   COPY public."Dislikes" (name, user_id) FROM stdin;
    public          postgres    false    213   �)                 0    33155    History watch 
   TABLE DATA           8   COPY public."History watch" (user_id, path) FROM stdin;
    public          postgres    false    214   �)                 0    33160    Likes 
   TABLE DATA           0   COPY public."Likes" (name, user_id) FROM stdin;
    public          postgres    false    215   �)                  0    33165    Links 
   TABLE DATA           9   COPY public."Links" (user_id, link, link_id) FROM stdin;
    public          postgres    false    216   �)       "          0    33171    Subscribers 
   TABLE DATA           9   COPY public."Subscribers" (user_id, channel) FROM stdin;
    public          postgres    false    218   �)       #          0    33176    Users 
   TABLE DATA           ^   COPY public."Users" (id, login, password, email, name, description, avatar, date) FROM stdin;
    public          postgres    false    219   *       %          0    33183    Videos 
   TABLE DATA           d   COPY public."Videos" (path, user_id, name, preview, date, views, description, duration) FROM stdin;
    public          postgres    false    221   .*       .           0    0    Answers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Answers_id_seq"', 25, true);
          public          postgres    false    210            /           0    0    Comments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Comments_id_seq"', 55, true);
          public          postgres    false    212            0           0    0    Links_link_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Links_link_id_seq"', 70, true);
          public          postgres    false    217            1           0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 28, true);
          public          postgres    false    220            �           2606    33192    Answers Answers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Answers" DROP CONSTRAINT "Answers_pkey";
       public            postgres    false    209            �           2606    33194    Comments Comments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_pkey";
       public            postgres    false    211            �           2606    33196    Links Links_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Links"
    ADD CONSTRAINT "Links_pkey" PRIMARY KEY (link_id);
 >   ALTER TABLE ONLY public."Links" DROP CONSTRAINT "Links_pkey";
       public            postgres    false    216            �           2606    33198    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    219            �           2606    33200    Videos Videos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Videos"
    ADD CONSTRAINT "Videos_pkey" PRIMARY KEY (path);
 @   ALTER TABLE ONLY public."Videos" DROP CONSTRAINT "Videos_pkey";
       public            postgres    false    221            �           2606    33201    Links id    FK CONSTRAINT     u   ALTER TABLE ONLY public."Links"
    ADD CONSTRAINT id FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 4   ALTER TABLE ONLY public."Links" DROP CONSTRAINT id;
       public          postgres    false    216    219    3210                  x������ � �            x������ � �            x������ � �            x������ � �            x������ � �             x������ � �      "      x������ � �      #      x������ � �      %      x������ � �     