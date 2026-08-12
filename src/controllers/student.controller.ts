import {type Request, type Response} from 'express';
import { StudentRepository } from '../repositories/student.repository.js';

const studentRepository = new StudentRepository();
export class StudentController {
    getStudents= async (req: Request, res: Response): Promise<Response> =>{
        try{
            const students= await studentRepository.findAll();
            return res.status(200).json(students);
        }catch(err){
            return res.status(500).json({message: 'Server Error', error: err});
        }
    }
    getStudentById = async (req: Request, res: Response): Promise<Response> => {
        try{
            const id = parseInt(req.params.id);

            const student = await studentRepository.findById(id);
            if(!student){
                return res.status(404).json({message: 'Student not found'});
            }
            return res.status(200).json(student);
        }catch(err){
            return res.status(500).json({message: 'Server Error', error: err});
        }
    }
    addStudent = async (req: Request, res: Response): Promise<Response> =>{
        try {
            const { name, email, password, phone_number } = req.body;

            if (!name || !email || !password || !phone_number) {
                return res.status(400).json({message: 'Invalid body response'});
            }
            const newStudent = await studentRepository.create({name, email, password, phone_number});
            return res.status(201).json(newStudent);
        }catch (error){
            return res.status(500).json({message: 'Server Error', error: error});
        }
    }
    deleteStudentById= async (req: Request, res: Response): Promise<Response> => {
        try{
            const id= parseInt(req.params.id);
            const success = await studentRepository.delete(id);
            if (!success){
                return res.status(404).json({message: 'Student not found'});
            }
            return res.status(200).json({message: 'Student deleted successfully'});
        }catch (error){
            return res.status(500).json({message: 'Server Error', error: error});
        }
    }
    updateStudentName= async (req: Request, res: Response): Promise<Response> => {
        try{
            const id = parseInt(req.params.id);
            const {name} = req.body;

            if (!name || !name.length) return res.status(400).json({message: 'Invalid body response'});
            const updatedStudent = await studentRepository.updateName(id, name);

            if (!updatedStudent) return res.status(404).json({message: 'Student not found'});

            return res.status(200).json(updatedStudent);
        }
        catch (error){
            return res.status(500).json({message: 'Server Error', error: error});
        }
    }
    updateStudentEmail= async (req: Request, res: Response): Promise<Response> => {
        try{
            const id= parseInt(req.params.id);
            const {email} = req.body;

            if (!email || !email.length) return res.status(400).json({message: 'Invalid body response'});
            const updatedStudent = await studentRepository.updateEmail(id, email);
            if (!updatedStudent) return res.status(404).json({message: 'Student not found'});
            return res.status(200).json(updatedStudent);
        }
        catch (error){
            return res.status(500).json({message: 'Server Error', error: error});
        }
    }
    updateStudentPassword= async (req: Request, res: Response): Promise<Response> => {
        try {
            const id = parseInt(req.params.id);
            const {password} = req.body;

            if (!password || !password.length) return res.status(400).json({message: 'Invalid body response'});
            const updatedStudent = await studentRepository.updatePassword(id, password);
            if (!updatedStudent) return res.status(404).json({message: 'Student not found'});
            return res.status(200).json(updatedStudent);
        }
        catch (error){
            return res.status(500).json({message: 'Server Error', error: error});
        }
    }
    updateStudentPhone= async (req: Request, res: Response): Promise<Response> => {
        try{
            const id= parseInt(req.params.id);
            const {phone_number} = req.body;

            if (!phone_number || !phone_number.toString().length) return res.status(400).json({message: 'Invalid body response'});
            const updatedStudent= await studentRepository.updatePhoneNumber(phone_number, phone_number);
            if (!updatedStudent) return res.status(404).json({message: 'Student not found'});
            return res.status(200).json(updatedStudent);
        }
        catch (error){
            return res.status(500).json({message: 'Server Error', error: error});
        }
    }
};