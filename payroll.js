let employeeList = [];
let employeeId = 1;

function addEmployee() {
    const employeeName = document.getElementById('employeeName').value;
    const daysWorked = parseInt(document.getElementById('daysWorked').value);
    const dailyRate = parseFloat(document.getElementById('dailyRate').value);
    const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

    if (employeeName && !isNaN(daysWorked) && !isNaN(dailyRate) && !isNaN(deductionAmount)) {
        const grossPay = daysWorked * dailyRate;
        const netPay = grossPay - deductionAmount;

        const employee = {
            id: employeeId++,
            name: employeeName,
            daysWorked: daysWorked,
            dailyRate: dailyRate,
            grossPay: grossPay,
            deductionAmount: deductionAmount,
            netPay: netPay
        };

        employeeList.push(employee);
        displayEmployees();
        clearForm();
    } else {
        alert('Please fill in all fields with valid values.');
    }
}

function displayEmployees() {
    const tbody = document.getElementById('payrollTable').getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';

    employeeList.forEach((employee, index) => {
        const row = tbody.insertRow();
        row.insertCell(0).innerText = index + 1;
        row.insertCell(1).innerText = employee.name;
        row.insertCell(2).innerText = employee.daysWorked;
        row.insertCell(3).innerText = employee.dailyRate.toFixed(2);
        row.insertCell(4).innerText = employee.grossPay.toFixed(2);
        row.insertCell(5).innerText = employee.deductionAmount.toFixed(2);
        row.insertCell(6).innerText = employee.netPay.toFixed(2);
        const deleteCell = row.insertCell(7);
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'Delete';
        deleteButton.onclick = () => deleteEmployee(index);
        deleteCell.appendChild(deleteButton);
    });
}

function deleteEmployee(index) {
    employeeList.splice(index, 1);
    displayEmployees();
}

function clearForm() {
    document.getElementById('employeeName').value = '';
    document.getElementById('daysWorked').value = '';
    document.getElementById('dailyRate').value = '';
    document.getElementById('deductionAmount').value = '';
}
