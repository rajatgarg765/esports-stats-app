curl http://localhost:8081/api/v1/events

{"events":[{"id":1,"name":"ESL Pro League","overview":"Top teams compete in ESL Pro League.","status":"ongoing","date":"2025-08-10","region":"Global"}],"page":1,"pageSize":10,"total":1}


curl http://localhost:8081/api/v1/events/1
{"id":1,"name":"ESL Pro League","overview":"Top teams compete in ESL Pro League.","imageUrl":"https://example.com/event1.jpg","date":"2025-08-10","endDate":"2025-08-20","status":"ongoing","participants":[{"team_id":"1","team_name":"Team Liquid","position":1,"prize_won":50000},{"team_id":"2","team_name":"Natus Vincere","position":2,"prize_won":25000}],"matches":[{"id":"m1","team1_id":"1","team2_id":"2","team1_name":"Team Liquid","team2_name":"Natus Vincere","score":"2-1","status":"completed","start_time":"2025-08-11T15:00:00Z"}]}


curl http://localhost:8081/api/v1/events/recent
{"events":[{"id":1,"name":"ESL Pro League","overview":"Top teams compete in ESL Pro League.","status":"ongoing","date":"2025-08-10","region":"Global"}]}


curl http://localhost:8081/api/v1/teams
{"page":1,"pageSize":10,"teams":[{"id":"1","name":"Team Liquid","region":"North America","ranking":3,"logo_url":"http://example.com/teamlogo.jpg","description":"A competitive esports team."}],"total":1}


curl http://localhost:8081/api/v1/teams/1
{"id":"1","name":"Team Liquid","region":"North America","ranking":3,"roster":[{"id":"p1","name":"EliGE","role":"Rifler","imageUrl":"https://example.com/elige.jpg","stats":{"kills":100,"deaths":80,"assists":30,"score":85}}]}


curl http://localhost:8081/api/v1/teams/popular
{"teams":[{"id":"1","name":"Team Liquid","region":"North America","ranking":3,"logo_url":"http://example.com/teamlogo.jpg","description":"A competitive esports team."}]}


curl http://localhost:8081/api/v1/players
{"page":1,"pageSize":10,"players":[{"id":"p1","name":"EliGE","team_id":"1","role":"Rifler","imageUrl":"https://example.com/elige.jpg","stats":{"kills":100,"deaths":80,"assists":30,"score":85}}],"total":1}


curl http://localhost:8081/api/v1/matches
{"matches":[{"id":"m1","event_id":1,"team1_id":"1","team2_id":"2","team1_name":"Team Liquid","team2_name":"Natus Vincere","score":"2-1","status":"completed","start_time":"2025-08-11T15:00:00Z"}],"page":1,"pageSize":10,"total":1}

curl http://localhost:8081/api/v1/matches/m1
{"id":"m1","event_id":1,"team1_id":"1","team2_id":"2","team1_name":"Team Liquid","team2_name":"Natus Vincere","score":"2-1","status":"completed","start_time":"2025-08-11T15:00:00Z"}


curl http://localhost:8081/api/v1/news
{"id":"1","title":"A", "description":"A", "img":"https://example.com/elige.jpg",
 "id":"2","title":"B","description":"B", "img": "https://example.com/elige.jpg"
}