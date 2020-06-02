SET DEFINE OFF;
--SQL Statement which produced this data:
--
--  SELECT 
--     ROWID, COD, NOMBRE, PU, 
--     FECFAB
--  FROM CARLOS.PRODUCTO;
--
Insert into CARLOS.PRODUCTO
   (COD, NOMBRE, PU, FECFAB)
 Values
   (1, 'Samsung Galaxy S20', 1000, TO_DATE('31/05/2020 17:09:29', 'DD/MM/YYYY HH24:MI:SS'));
Insert into CARLOS.PRODUCTO
   (COD, NOMBRE, PU, FECFAB)
 Values
   (2, 'Notebook MSI', 1100, TO_DATE('31/05/2020 17:10:17', 'DD/MM/YYYY HH24:MI:SS'));
Insert into CARLOS.PRODUCTO
   (COD, NOMBRE, PU, FECFAB)
 Values
   (3, 'PlayStation 4', 350, TO_DATE('31/05/2020 17:10:41', 'DD/MM/YYYY HH24:MI:SS'));
Insert into CARLOS.PRODUCTO
   (COD, NOMBRE, PU, FECFAB)
 Values
   (4, 'PlayStation 5', 500, TO_DATE('31/05/2020 18:20:42', 'DD/MM/YYYY HH24:MI:SS'));
COMMIT;
