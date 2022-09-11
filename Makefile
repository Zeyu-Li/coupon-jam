db:
	pscale connect shorter main --port 3309

migrate:
	npx prisma db push

primsa:
	npx prisma studio

init:
	yarn && yarn dev
