INSERT INTO terms ("number") VALUES (1);
INSERT INTO terms ("number") VALUES (2);
INSERT INTO terms ("number") VALUES (3);
INSERT INTO terms ("number") VALUES (4);
INSERT INTO terms ("number") VALUES (5);
INSERT INTO terms ("number") VALUES (6);
INSERT INTO terms ("number") VALUES (7);
INSERT INTO terms ("number") VALUES (8);
INSERT INTO terms ("number") VALUES (9);
INSERT INTO terms ("number") VALUES (10);

INSERT INTO disciplines ("name", "termId") VALUES ('calculus 1', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('physics 1', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('CAD', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('introduction to engineering', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('calculus 2', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('physics 2', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('electrical circuits 1', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('programming 1 - intro', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('calculus 3', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('physics 3', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('electrical circuits 2', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('programming 2 - OOP', 3);

INSERT INTO teachers ("name") VALUES ('Dina');
INSERT INTO teachers ("name") VALUES ('Bruna');
INSERT INTO teachers ("name") VALUES ('Edu');
INSERT INTO teachers ("name") VALUES ('Marcus');

INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 2);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (3, 3);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (4, 4);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 5);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (3, 7);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (4, 8);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 9);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 10);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (3, 11);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (4, 12);

INSERT INTO categories ("name") VALUES ('first test');
INSERT INTO categories ("name") VALUES ('second test');
INSERT INTO categories ("name") VALUES ('repeating test');
INSERT INTO categories ("name") VALUES ('first assignment');
INSERT INTO categories ("name") VALUES ('second assignment');
INSERT INTO categories ("name") VALUES ('TCC');

INSERT INTO tests ("name", "pdfUrl", "categoryId", "teachersDisciplinesId")
VALUES ('test 1', 'asd', 1, 1);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teachersDisciplinesId")
VALUES ('test 2', 'asd', 2, 1);
INSERT INTO tests ("name", "pdfUrl", "categoryId", "teachersDisciplinesId")
VALUES ('repeating test', 'asd', 3, 1);
