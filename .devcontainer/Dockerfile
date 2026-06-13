FROM node:24.16.0-bookworm

ARG WORKDIR="/workspace"
ARG USERNAME=devcontainer

RUN useradd --no-create-home \
            ${USERNAME}

USER ${USERNAME}:${USERNAME}

WORKDIR ${WORKDIR}

# COPY --chown=${USERNAME}:${USERNAME} package.json package-lock.json .

# RUN npm ci --no-fund

CMD [ "node" ]
