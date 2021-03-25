export interface OverallPosition {
  deviation: number;
  position_out_of: number;
  position: number;
}

export interface StreamPosition {
  deviation: number;
  position_out_of: number;
  position: number;
}

export interface MeanMarks {
  deviation: number;
  avg_score: number;
}

export interface SubjectResult {
  rank_out_of: number;
  subject_name: string;
  deviation: number;
  grade: string;
  comment: string;
  rank: number;
  score: number;
}

export interface StudentPerformanceOverTime {
  exam_name: string;
  avg_score: number;
}

export interface StudentData {
  student_name: string;
  student_admission_number: string;
  student_photo: string;
  exam_name: string;
  class_name: string;
  principals_remarks: string;
  class_teachers_remarks: string;
  mean_grade: string;
  overall_position: OverallPosition;
  stream_position: StreamPosition;
  mean_marks: MeanMarks;
  subject_results: SubjectResult[];
  student_performance_over_time: StudentPerformanceOverTime[];
}
