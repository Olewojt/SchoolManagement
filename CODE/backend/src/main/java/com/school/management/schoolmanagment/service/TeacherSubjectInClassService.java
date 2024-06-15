package com.school.management.schoolmanagment.service;

import com.school.management.schoolmanagment.dto.*;
import com.school.management.schoolmanagment.mapper.SchoolClassWithSubjectsDTOMapper;
import com.school.management.schoolmanagment.mapper.TeacherSubjectInfoDTOMapper;
import com.school.management.schoolmanagment.model.*;
import com.school.management.schoolmanagment.repository.SchoolClassRepository;
import com.school.management.schoolmanagment.repository.SubjectRepository;
import com.school.management.schoolmanagment.repository.TeacherSubjectInClassRepository;
import com.school.management.schoolmanagment.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import javax.persistence.EntityNotFoundException;
import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import static com.school.management.schoolmanagment.mapper.TeacherSubjectInClassDTOMapper.mapToTeacherSubjectClassStudentsDTO;

@Service
@RequiredArgsConstructor
public class TeacherSubjectInClassService {

    private final SubjectService subjectService;
    private final UserRepository userRepository;
    private final SchoolClassRepository schoolClassRepository;
    private final SubjectRepository subjectRepository;
    private final TeacherSubjectInClassRepository teacherSubjectInClassRepository;
    private final SchoolClassWithSubjectsDTOMapper schoolClassWithSubjectsDTOMapper;
    private final TeacherSubjectInfoDTOMapper teacherSubjectInfoDTOMapper;

    public List<TeacherSubjectsInfoDTO> getAllTeachersWithClassesAndSubjects() {
        List<User> teachers = userRepository.findByRoleName("Teacher");
        List<Long> teacherIds = teachers.stream().map(User::getId).toList();

        List<TeacherSubjectsInfoDTO> allTeachersWithClassesAndSubjects = new ArrayList<>();

        teacherIds.forEach(teacherId ->  {
            List<TeacherSubjectInClass> teacherSubjectsInClasses = teacherSubjectInClassRepository.findAllByTeacherId(teacherId);
            List<SchoolClassWithSubjectsDTO> schoolClassWithSubjectsDTOs = extractTeacherSubjectsInClasses(teacherSubjectsInClasses);
            User teacher = userRepository.findById(teacherId).get();
            allTeachersWithClassesAndSubjects.add(teacherSubjectInfoDTOMapper.mapToTeacherSubjectsInfoDTO(teacher, schoolClassWithSubjectsDTOs));
        });

        return allTeachersWithClassesAndSubjects;
    }

    public TeacherSubjectsInfoDTO addTeacherWithSubjectToClass(String className, String subjectName, Long teacherId) {
        SchoolClass schoolClass = schoolClassRepository.findByName(className);
        if (subjectRepository.findByName(subjectName) == null) {
            subjectRepository.save(new Subject(subjectName));
        }

        subjectService.addClassToSubject(subjectName, className);

        Subject subject = subjectRepository.findByName(subjectName);
        User teacher = userRepository.findById(teacherId)
                .orElseThrow(() -> new EntityNotFoundException("User With Given ID Not Found!"));
        TeacherSubjectInClass tsic = teacherSubjectInClassRepository
                .findByIdSubjectIdAndIdClassId(subject.getId(), schoolClass.getId());
        if (tsic != null) {
            teacherSubjectInClassRepository.delete(tsic);
        }
        teacherSubjectInClassRepository.save(new TeacherSubjectInClass(teacher, subject, schoolClass));

        List<TeacherSubjectInClass> teacherSubjectsInClasses
                = teacherSubjectInClassRepository.findAllByTeacherId(teacherId);

        List<SchoolClassWithSubjectsDTO> classesWithSubjectsDTOs = extractTeacherSubjectsInClasses(teacherSubjectsInClasses);

        return teacherSubjectInfoDTOMapper.mapToTeacherSubjectsInfoDTO(teacher, classesWithSubjectsDTOs);
    }

    public List<TeacherSubjectClassStudentsDTO> findAllByTeacherId(Long teacherId) {
        User teacher = userRepository.findById(teacherId)
                .orElseThrow();
        List<TeacherSubjectInClass> teacherSubjectsInGroup = userRepository.findTeacherSubjectsInGroup(teacher);
        return mapToTeacherSubjectClassStudentsDTO(teacherSubjectsInGroup);
    }

    private List<SchoolClassWithSubjectsDTO> extractTeacherSubjectsInClasses(List<TeacherSubjectInClass> teacherSubjectsInClasses) {
        List<TSICID> teacherSubjectsInClassesIds = teacherSubjectsInClasses
                .stream()
                .map(TeacherSubjectInClass::getId)
                .toList();

        List<SchoolClass> teacherClasses = schoolClassRepository
                .findAllById(teacherSubjectsInClassesIds
                        .stream()
                        .map(TSICID::getClassId)
                        .toList());

        List<SchoolClassWithSubjectsDTO> schoolClassesWithSubjects
                = schoolClassWithSubjectsDTOMapper.mapToSchoolClassWithSubjectsList(teacherClasses);

        Set<Long> teacherClassesIds = teacherSubjectsInClassesIds
                .stream()
                .map(TSICID::getClassId)
                .collect(Collectors.toSet());

        Set<Long> teacherSubjectsIds = teacherSubjectsInClassesIds
                .stream()
                .map(TSICID::getSubjectId)
                .collect(Collectors.toSet());

        schoolClassesWithSubjects
                .forEach(schoolClassWithSubjects -> {
                    List<SubjectDTO> filteredSubjects = schoolClassWithSubjects.getSubjectDTOs()
                            .stream()
                            .filter(subjectDTO -> teacherSubjectsIds.contains(subjectDTO.getId())
                                    && teacherClassesIds.contains(schoolClassWithSubjects.getId()))
                            .sorted(Comparator.comparing(SubjectDTO::getName)) // Sorting the subjects alphabetically by name
                            .collect(Collectors.toList());
                    schoolClassWithSubjects.setSubjectDTOs(filteredSubjects);
                });

        return schoolClassesWithSubjects;
    }
}
