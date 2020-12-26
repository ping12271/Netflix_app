export const trimText = (text, limit) =>
    text.length > limit ? `${text.slice(0, limit)}...` : text;

export const formDate = date => {
    const theDate = new Date(date)
    return theDate.toLocaleDateString("ko", {
        day: "numeric", // 날짜 형식으로 자르는 것
        month: "long",
        year: "numeric"
    })
}