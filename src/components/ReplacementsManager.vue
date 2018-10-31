<template>
<div>
    <v-container>
        <v-layout>
            <v-flex>
                <v-text-field
                    label="Target word"
                    v-model="newKey"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-text-field
                    label="Replacement word"
                    v-model="newValue"
                ></v-text-field>
            </v-flex>
            <v-flex>
                <v-btn @click="addWord">Add</v-btn>
            </v-flex>
        </v-layout>

        <v-list>
            <v-list-tile v-for="(value, key) in words" :key="key">
                <v-list-tile-content>
                    <v-list-tile-title>Key: {{ key }}</v-list-tile-title>
                </v-list-tile-content>
                <v-list-tile-content>
                    <v-list-tile-title>Value: {{ value }}</v-list-tile-title>
                </v-list-tile-content>

                <v-list-tile-action>
                    <v-btn icon ripple>
                        <v-icon color="grey lighten-1">trash</v-icon>
                    </v-btn>
                </v-list-tile-action>
            </v-list-tile>
        </v-list>
    </v-container>
</div>
</template>

<script>
    export default {
        data: () => ({
            newKey: '',
            newValue: '',
            words: {}
        }),

        methods: {
            addWord() {
                this.words = {
                    ...this.words,
                    [this.newKey.toString()]: this.newValue,
                };

                this.newKey = '';
                this.newValue = '';
            },

            removeWord(key) {
                const { [key]: removed, ...words } = this.words;
                this.words = words;
            }
        }
    };
</script>

<style lang="stylus">

</style>
