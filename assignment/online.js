
    // Get marks using prompt
    var s1 = parseInt(prompt("Enter marks for Subject 1:"));
    var s2 = parseInt(prompt("Enter marks for Subject 2:"));
    var s3 = parseInt(prompt("Enter marks for Subject 3:"));

    // Store marks
    var marks = [s1, s2, s3];
    var below35 = 0;

    // Count how many subjects are below 35
    if (marks[0] < 35) below35++;
    if (marks[1] < 35) below35++;
    if (marks[2] < 35) below35++;

    // Calculate average
    var average = (s1 + s2 + s3) / 3;

    // Determine result
    var result = "";
    if (below35 === 0) {
      result = "Passed";
    } else if (below35 === 1) {
      result = "Supplementary";
    } else {
      result = "Failed";
    }

    // Determine performance remark
    var remark = "";
    if (result === "Passed") {
      if (average >= 75) {
        remark = "Excellent performance";
      } else if (average >= 60) {
        remark = "Good performance";
      } else if (average >= 50) {
        remark = "Satisfactory performance";
      } else {
        remark = "Needs improvement";
      }
    } else if (result === "Supplementary") {
      remark = "Eligible for retest in one subject";
    } else {
      remark = "Consider revising thoroughly";
    }

    // Show results
    alert("Result: " + result +
          "\nAverage Marks: " + average.toFixed(2) +
          "\nPerformance Remark: " + remark);
  