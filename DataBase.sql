PGDMP     9    5                |            Videohosting    14.7    14.7 '    (           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            )           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            *           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            +           1262    16741    Videohosting    DATABASE     k   CREATE DATABASE "Videohosting" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Russian_Russia.1251';
    DROP DATABASE "Videohosting";
                postgres    false            �            1259    16764    Answers    TABLE     �   CREATE TABLE public."Answers" (
    id integer NOT NULL,
    date date NOT NULL,
    text character varying NOT NULL,
    user_id integer NOT NULL,
    comment_id integer NOT NULL
);
    DROP TABLE public."Answers";
       public         heap    postgres    false            �            1259    33136    Answers_id_seq    SEQUENCE     �   ALTER TABLE public."Answers" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Answers_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    212            �            1259    16757    Comments    TABLE     �   CREATE TABLE public."Comments" (
    id integer NOT NULL,
    video character varying NOT NULL,
    date date NOT NULL,
    text character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Comments";
       public         heap    postgres    false            �            1259    33135    Comments_id_seq    SEQUENCE     �   ALTER TABLE public."Comments" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Comments_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    211            �            1259    33130    Dislikes    TABLE     f   CREATE TABLE public."Dislikes" (
    name character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Dislikes";
       public         heap    postgres    false            �            1259    16771    History watch    TABLE     k   CREATE TABLE public."History watch" (
    user_id integer NOT NULL,
    path character varying NOT NULL
);
 #   DROP TABLE public."History watch";
       public         heap    postgres    false            �            1259    33125    Likes    TABLE     c   CREATE TABLE public."Likes" (
    name character varying NOT NULL,
    user_id integer NOT NULL
);
    DROP TABLE public."Likes";
       public         heap    postgres    false            �            1259    24935    Links    TABLE     �   CREATE TABLE public."Links" (
    user_id integer NOT NULL,
    link character varying NOT NULL,
    link_id integer NOT NULL
);
    DROP TABLE public."Links";
       public         heap    postgres    false            ,           0    0    TABLE "Links"    ACL     2   REVOKE ALL ON TABLE public."Links" FROM postgres;
          public          postgres    false    216            �            1259    24946    Links_link_id_seq    SEQUENCE     �   CREATE SEQUENCE public."Links_link_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 *   DROP SEQUENCE public."Links_link_id_seq";
       public          postgres    false    216            -           0    0    Links_link_id_seq    SEQUENCE OWNED BY     K   ALTER SEQUENCE public."Links_link_id_seq" OWNED BY public."Links".link_id;
          public          postgres    false    217            �            1259    16776    Subscribers    TABLE     l   CREATE TABLE public."Subscribers" (
    user_id integer NOT NULL,
    channel character varying NOT NULL
);
 !   DROP TABLE public."Subscribers";
       public         heap    postgres    false            �            1259    16742    Users    TABLE     q  CREATE TABLE public."Users" (
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
       public         heap    postgres    false            �            1259    24934    Users_id_seq    SEQUENCE     �   ALTER TABLE public."Users" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Users_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    209            �            1259    16750    Videos    TABLE     ,  CREATE TABLE public."Videos" (
    path character varying NOT NULL,
    user_id integer NOT NULL,
    name character varying(100),
    preview character varying DEFAULT '/videos/posters/default.png'::character varying,
    date date,
    views integer DEFAULT 0,
    description character varying
);
    DROP TABLE public."Videos";
       public         heap    postgres    false            �           2604    24947    Links link_id    DEFAULT     r   ALTER TABLE ONLY public."Links" ALTER COLUMN link_id SET DEFAULT nextval('public."Links_link_id_seq"'::regclass);
 >   ALTER TABLE public."Links" ALTER COLUMN link_id DROP DEFAULT;
       public          postgres    false    217    216                      0    16764    Answers 
   TABLE DATA           H   COPY public."Answers" (id, date, text, user_id, comment_id) FROM stdin;
    public          postgres    false    212   *)                 0    16757    Comments 
   TABLE DATA           D   COPY public."Comments" (id, video, date, text, user_id) FROM stdin;
    public          postgres    false    211   �)       #          0    33130    Dislikes 
   TABLE DATA           3   COPY public."Dislikes" (name, user_id) FROM stdin;
    public          postgres    false    219   +                 0    16771    History watch 
   TABLE DATA           8   COPY public."History watch" (user_id, path) FROM stdin;
    public          postgres    false    213   �+       "          0    33125    Likes 
   TABLE DATA           0   COPY public."Likes" (name, user_id) FROM stdin;
    public          postgres    false    218   P-                  0    24935    Links 
   TABLE DATA           9   COPY public."Links" (user_id, link, link_id) FROM stdin;
    public          postgres    false    216   �.                 0    16776    Subscribers 
   TABLE DATA           9   COPY public."Subscribers" (user_id, channel) FROM stdin;
    public          postgres    false    214   Z/                 0    16742    Users 
   TABLE DATA           ^   COPY public."Users" (id, login, password, email, name, description, avatar, date) FROM stdin;
    public          postgres    false    209   �/                 0    16750    Videos 
   TABLE DATA           Z   COPY public."Videos" (path, user_id, name, preview, date, views, description) FROM stdin;
    public          postgres    false    210   N2       .           0    0    Answers_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public."Answers_id_seq"', 25, true);
          public          postgres    false    221            /           0    0    Comments_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."Comments_id_seq"', 48, true);
          public          postgres    false    220            0           0    0    Links_link_id_seq    SEQUENCE SET     B   SELECT pg_catalog.setval('public."Links_link_id_seq"', 61, true);
          public          postgres    false    217            1           0    0    Users_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public."Users_id_seq"', 25, true);
          public          postgres    false    215            �           2606    16770    Answers Answers_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Answers"
    ADD CONSTRAINT "Answers_pkey" PRIMARY KEY (id);
 B   ALTER TABLE ONLY public."Answers" DROP CONSTRAINT "Answers_pkey";
       public            postgres    false    212            �           2606    16763    Comments Comments_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY (id);
 D   ALTER TABLE ONLY public."Comments" DROP CONSTRAINT "Comments_pkey";
       public            postgres    false    211            �           2606    24954    Links Links_pkey 
   CONSTRAINT     W   ALTER TABLE ONLY public."Links"
    ADD CONSTRAINT "Links_pkey" PRIMARY KEY (link_id);
 >   ALTER TABLE ONLY public."Links" DROP CONSTRAINT "Links_pkey";
       public            postgres    false    216            �           2606    16749    Users Users_pkey 
   CONSTRAINT     R   ALTER TABLE ONLY public."Users"
    ADD CONSTRAINT "Users_pkey" PRIMARY KEY (id);
 >   ALTER TABLE ONLY public."Users" DROP CONSTRAINT "Users_pkey";
       public            postgres    false    209            �           2606    16756    Videos Videos_pkey 
   CONSTRAINT     V   ALTER TABLE ONLY public."Videos"
    ADD CONSTRAINT "Videos_pkey" PRIMARY KEY (path);
 @   ALTER TABLE ONLY public."Videos" DROP CONSTRAINT "Videos_pkey";
       public            postgres    false    210            �           2606    24940    Links id    FK CONSTRAINT     u   ALTER TABLE ONLY public."Links"
    ADD CONSTRAINT id FOREIGN KEY (user_id) REFERENCES public."Users"(id) NOT VALID;
 4   ALTER TABLE ONLY public."Links" DROP CONSTRAINT id;
       public          postgres    false    216    3204    209               �   x�34�4202�50�52�L)N+N�2L��M�e���A��\�f(�)i`Mi`Y.CsdI��H.C4��q	$���
/��|�(�ib�ed��7��H,�NC�,�/�8�4A�f\FH>�估�¾�/쾰h��{A�,�b���� ��Cr         :  x����J1 �s��$d&�n��#�$^�k�-�������KA�^T�y(ł�>����Hm�K�݄l3���2N�k(g9� v��vX�W��S=��h.ʢ>� ��f)�����Z�m�)�R@�F%wG��s2���m�<�&q�����l�Qʐ����� ���`[�eL��4�(Q>�:@T��f�Z���"\��{A�Sg�$�Q��㖗�l�B}�GX��Q�KbI�z��^�J���|�O�¯<k�#?4��g�vޛ��h]L��!,\�s��{u;cۿ�٦���uyOK)� w�      #   �   x�u�K
1 е�KB���ܣ+q#cU��TQ<�̠���[<!Q� l�	� $4�-V��l����u�N�8N@B��i���n�?иb�ѹPA�t�/��G�z}����ֈ�)��>�����9���,         �  x���Ɏ�@���t��z�~N�� �ǧh�h�M×ʿt|�@ńf�"ݏ��)��'���B�d��P�<��	ŉLG_�D�]z�	S$,��)����74�9?�%��:�2�[!���h�Ԫ�߅ Υ��Osm���">�ӻ���� LK��届����<����vt� غ�mz&��6j`Hmڲ�Wr$���FL��Fτ�"��ͻ��%�oq��U5��Aq%�E��&u���@��a��s��=�G3�q	�'��]�\K\�f�,�i�-X�Ĭ!/�z�!i���� ?\߰=��J�[��އ��7f�y+!�4��pa�>6��$�L�r������x !�ݲ�3t�_�s�b ��[�`������ꣀ�~�b���X      "   &  x����r�0E�Ϳ�c���?�b�	!P�A�����c����g��D���9"h��F\��������S��}�>G	��F8��o���OA�D��Im��Eی^���L�0a��e��j��}cJەUw���т4���h'؛-6ݨ6�0��riA@,)���r8�����E�\:`��g7���z��킎n#��6iDW_�a��~S�#>��0O��f[U8;O�����Y�O�+���C��,�WN�-N�1�Wy���ww�{�s!���SA�A��,�>����          �   x�]O�N�0<�?�N�m�\V��.��j U�V�O),K�_cx��C�{�xcH���.[�SHi
�j�o���5���=znc���C�t�=ǜܔa��w7�[�w����mf���{"����E��DӢ%9!L_e�-G��U��1��<����Gh���,P%�6�g=����B�6�\��]��'tL�D�tCPK         6   x�3��K�K����22��*AC#c �22���`,C�7��+F��� ���         �  x��T�n�@]��"?0��؎��,Y��E��.?�C&N[V�X�6HHl�*Z~a�Gܙ8�i�&;6X���g��W0�K��"\xx���ĩT�"GeUdU^�D��7�@���J%3Eas��	&|���.�`�n��ԝ9�ux�i2���2��j#"��Z�ލ��wyH=FE���S�>��IRE��t���NzP���W��T�$���~���T/[�G�Q��g���yK�����^����-�U��_���%K�����w�3�.�P��	]�c��P�y�J�������6i/U��q)N(bM�5"��������H���5̴��s�'0[$�����i��~�'�~�B�8Z�BM�o�����v!j����=gP
�z7�l�,`�dp 6�)�#�a���+��Ae
R��s5���("7t�^hA ��	{�i_)!�S)�X�����sm>��w�#�]��V�*y��.�p�����	wD@ҋ�M�8CS�};H�ǽe*���|SXd蓻�!'H�Д���;X�yb�-UpE��!�n_"�:V�r6jb�[�qy�K�⣩���5(�U���<�4˳4��Sn[ �I���3�ϡ(�񕐞	�ho#��LL6������V�� �	eܶ
�{\Μ��8 ���f         �  x��UKn�0]ӧ�@��+�=�WE7�,ɒY6e��M�-P�ˢ���6�u����qd�]e�	Λ�y3O�!�9�Ⱦ� J�^{
V$QI��y� ����������l���:+g��ꌜ�	��o�f,�CA7���e
ڣ��I��oz���ͻ����&�����$<F<�?a��a]1����N�N�-�oxb��BU+_İ,Z���0�[sռ����wpY$=,<�a�2fa�Z%�}�n�u����p�I��VG�LQh//(0=� �N���e1-�U�ːu_� �2nÓ�_k�F�HSB��<G$�GS-���t!�MX�R;��)D��,�aE�,��c���{�z�C��=W��`9ʗ{�˥�fq��J��S��.�Q���1	p@(%���O����2D�&�OEU���w��?kll�����,��ƃ(pr�Y�G�"�����b,b�׿������fo$�w�mZ�MU4M+�|8/�c�#���#�˾�e���W�[�Խ��|����1��Y����՚+vkw��� �����yr�iY�Ἠ%��]1���8���s�*��S����|H x�{�A!�9�&RB.��Y�*�� #�]®ʱĥ�cY�������}6B6V��jM��a*@���z p(tk     