const connection = require('./../helper/dbconnection');


exports.addRecord = function (req, res) {
    try {
        let name = req.body.name;
        let rollno = req.body.rollno;
        let city = req.body.city;

        let query = `INSERT into student(name,rollno,city) VALUES ('${name}',${rollno},'${city}')`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log("Record inserted",result);
            return res.status(200).json({
                message: 'Record added successfully.',
                data: result
            });

        })
    }
    catch (err) {
        console.error('Error inserting records:', err);
        return res.status(500).json({
            message: 'Failed to insert records in the database.',
        });
    }
}
exports.getRecord = async function (req, res) {
    try {
        let query = `SELECT * FROM student`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log("Record found", result);
            return res.status(200).json({
                message: 'Record found successfully.',
                data: result,
            });
        });
    } catch (err) {
        console.error('Error fetching records:', err);
        return res.status(500).json({
            message: 'Failed to fetch records from the database.',
        });
    }
};

exports.updateRecord = async function (req, res) {
    try {
        let name = req.body.name;
        let rollno = req.body.rollno;
        let city = req.body.city;
        let id = req.params.id;

        let query = `UPDATE student SET name='${name}', rollno=${rollno}, city='${city}' WHERE id=${id}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log("Record updated", result);
            return res.status(200).json({
                message: 'Record updated.',
                data: result,
            });
        });
    } catch (err) {
        console.error('Error updating records:', err);
        return res.status(500).json({
            message: 'Failed to update records in the database.',
        });
    }
};

exports.deleteRecord = function (req, res) {
    try {
        let id = req.params.id;

        let query = `DELETE from student where id=${id}`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log("Record deleted", result);
            return res.status(200).json({
                message: 'Record deleted.',
                data: result,
            });
        });

    }
    catch (err) {
        console.error('Error deleting records:', err);
        return res.status(500).json({
            message: 'Failed to delete records in the database.',
        });
    }
}

exports.addTeacher = function (req, res) {
    try {
        let name = req.body.name;
        let subject = req.body.subject;
        let phone = req.body.phone;

        let query = `INSERT into teacher(name,subject,phone) VALUES ('${name}','${subject}',${phone})`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log("Record inserted", result);
            return res.status(200).json({
                message: 'Record added successfully.',
                data: result
            });
        })
    }
    catch (err) {
        console.error('Error inserting records:', err);
        return res.status(500).json({
            message: 'Failed to insert records in the database.',
        });
    }
}
exports.mergRecord = function (req, res) {
    try {
        let query = `SELECT student.id,student.name,teacher.name AS Teacher FROM student INNER JOIN teacher ON student.id=teacher.id`;
        connection.query(query, (err, result) => {
            if (err) throw err;
            console.log("Record found", result);
            return res.status(200).json({
                message: 'Record found successfully.',
                data: result,
            });
        });
    } catch (err) {
        console.error('Error fetching records:', err);
        return res.status(500).json({
            message: 'Failed to fetch records from the database.',
        });
    }
}


