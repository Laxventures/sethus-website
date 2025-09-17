export function formatDate(date: Date | 'Present'): string {
    if (date === 'Present') return 'Present';
    return date.toLocaleString('default', { month: 'short', year: 'numeric' });
}

export function calculateDuration(start: Date, end: Date | 'Present'): string {
    const endDate = end === 'Present' ? new Date() : end;
    let years = endDate.getFullYear() - start.getFullYear();
    let months = endDate.getMonth() - start.getMonth();

    if (months < 0) {
        years--;
        months += 12;
    }

    const yearsStr = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const monthsStr = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';
    return [yearsStr, monthsStr].filter(Boolean).join(' ');
}