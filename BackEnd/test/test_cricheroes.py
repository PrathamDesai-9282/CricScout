from cricheroes import Team

URL = input("Enter Team URL: ")
team = Team(URL)

print(team.team_profile())